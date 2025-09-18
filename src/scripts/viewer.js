// This file contains the logic for loading and displaying the 3D model from the .glb file using a 3D rendering library.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class Viewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.init();
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x808080);

        // Camera setup
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        this.camera.position.set(0, 2, 5);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(ambientLight, directionalLight);

        // Event listeners
        window.addEventListener('resize', this.onResize.bind(this));

        // Start animation
        this.animate();
        
        // Load model
        this.loadModel();
    }

    loadModel() {
        const loader = new GLTFLoader();
        const loadingOverlay = document.getElementById('loading-overlay');
        const progressText = loadingOverlay.querySelector('.progress-text');

        // Convert GitHub URL to raw format
        const modelUrl = 'https://raw.githubusercontent.com/wxcvbnlmjk/three-viewer/main/mayor.glb';

        loader.load(
            modelUrl,
            (gltf) => {
                const model = gltf.scene;
                
                // Scale down the model
                model.scale.set(0.1, 0.1, 0.1);
                
                // Center and position model
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.x -= center.x;
                model.position.y -= center.y;
                model.position.z -= center.z;
                
                // Adjust camera based on model size
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                this.camera.position.set(0, maxDim * 0.5, maxDim * 1.5);
                this.camera.lookAt(0, 0, 0);
                
                this.controls.target.set(0, 0, 0);
                this.controls.update();
                
                this.scene.add(model);

                // Hide loading overlay when done
                loadingOverlay.style.display = 'none';
            },
            (xhr) => {
                const percentComplete = Math.round((xhr.loaded / xhr.total) * 100);
                progressText.textContent = `Loading: ${percentComplete}%`;
            },
            (error) => {
                console.error('An error occurred:', error);
                progressText.textContent = 'Error loading model';
                progressText.style.color = '#ff0000';
            }
        );
    }

    onResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Create viewer instance
const viewer = new Viewer('canvas-container');