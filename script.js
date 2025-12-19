import * as THREE from "./three.module.js";

const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

camera.position.set(1, 1, 1);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
canvas.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

function resize() {
    const windowWidth = canvas.clientWidth;
    const windowHeight = canvas.clientHeight;
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(windowWidth, windowHeight);
}

window.addEventListener("resize", resize);
