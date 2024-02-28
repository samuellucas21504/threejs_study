import * as three from "./three.module.min.js";

// Create aspect ratio object
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Instantiate Scene
const scene = new three.Scene();

// Create a Mesh (Geometry Object)
const geometry = new three.BoxGeometry(1, 1, 1);
const material = new three.MeshBasicMaterial({
    color: "#fbf7f5",
});
const mesh = new three.Mesh(geometry, material);

// Create a camera
const camera = new three.PerspectiveCamera(45, aspect.width / aspect.height, 1, 2000);
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;

// Add values to scene
scene.add(mesh);
scene.add(camera);

// Create a renderer
const canvas = document.querySelector(".three_canvas");
const renderer = new three.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
