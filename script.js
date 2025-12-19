import * as THREE from "./three.module.js"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera()
camera.position.z = 3

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

renderer.render(scene, camera)
