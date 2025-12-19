import * as THREE from "./three.module.js"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera()

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

renderer.render(scene, camera)
