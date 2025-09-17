# Three.js Model Viewer

A web-based 3D model viewer application that allows users to visualize and interact with GLB/GLTF models. This project specifically showcases the Fourvière Basilica 3D model.

## Features

- Real-time 3D model visualization
- Orbit controls for model interaction
- Responsive design
- Loading progress indicator
- Automatic model centering and scaling
- Proper lighting setup

## Technologies Used

- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[Vite](https://vitejs.dev/)** - Frontend build tool and development server
- **[GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)** - For loading GLB/GLTF 3D models
- **[OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)** - For camera manipulation

## Project Structure

```
three-viewer0/
├── src/
│   ├── scripts/
│   │   └── viewer.js     # Main viewer implementation
│   ├── models/
│   │   └── fourviere.min.glb    # 3D model file
│   └── styles/
│       └── style.css     # Application styles
├── index.html            # Entry point
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd three-viewer0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will automatically open at `http://localhost:5173`

## Usage

- **Rotate**: Click and drag with left mouse button
- **Pan**: Click and drag with right mouse button
- **Zoom**: Use mouse wheel or pinch gesture
- **Reset View**: Double click

## Development

To modify the viewer or add new features:

1. The main viewer logic is in `src/scripts/viewer.js`
2. Add new 3D models to the `src/models` directory
3. Configure model loading parameters in the `loadModel()` method

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.