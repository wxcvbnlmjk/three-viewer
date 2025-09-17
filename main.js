import * as THREE from 'three';

// Création de la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Configuration du renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040); // Couleur de fond grise
document.body.appendChild(renderer.domElement);

// Ajout d'un cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Ajout de lumière
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// Ajout d'une lumière ambiante
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Position de la caméra
camera.position.z = 5;

// Animation
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});