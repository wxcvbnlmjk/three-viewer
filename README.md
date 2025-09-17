# three-viewer

This project is a simple web application for visualizing 3D object files in the GLB format. It utilizes a 3D rendering library to load and display the models in a web browser.

## Project Structure

```
three-viewer
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   └── main.css      # Styles for the application
│   ├── scripts
│   │   ├── main.js       # Main JavaScript file
│   │   └── viewer.js     # Logic for loading and displaying 3D models
│   └── models
│       └── sample.glb    # Sample 3D model in GLB format
├── server.js             # Simple server to serve static files
├── package.json          # npm configuration file
├── .gitignore            # Files and directories to ignore by Git
└── README.md             # Documentation for the project
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd three-viewer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   node server.js
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- The application will load the sample 3D model from the `src/models/sample.glb` file and display it in the browser.
- You can modify the `src/models` directory to include your own GLB files for visualization.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.