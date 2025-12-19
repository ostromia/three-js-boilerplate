import * as THREE from "./three.module.js"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(1, 1, 1);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(windowWidth, windowHeight);
});
