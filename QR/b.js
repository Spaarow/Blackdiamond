// Create a Three.js scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGLRenderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("ar-canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Generate a QR code
const qrCode = new QRCode(document.getElementById("qrcode"), {
    text: "glTF", // Replace with your AR experience URL
    width: 128,
    height: 128,
});
