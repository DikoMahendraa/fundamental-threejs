# CSS2DRenderer Documentation

## Introduction

`CSS2DRenderer` is a part of `three.js` that allows rendering HTML elements as 2D overlays on a 3D scene. Unlike `WebGLRenderer`, which handles 3D objects, `CSS2DRenderer` is used to create labels, tooltips, and other UI elements that stay aligned with 3D objects.

## Installation

Ensure you have `three.js` installed in your project:

```sh
npm install three
```

## Basic Usage

### 1. Import the Required Modules

```javascript
import * as THREE from "three";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
```

### 2. Create a Scene, Camera, and Renderer

```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

### 3. Create the CSS2DRenderer

```javascript
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
document.body.appendChild(labelRenderer.domElement);
```

### 4. Create a 3D Object and Label

```javascript
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const labelDiv = document.createElement("div");
labelDiv.className = "label";
labelDiv.textContent = "Hello, Three.js!";
labelDiv.style.color = "white";
labelDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
labelDiv.style.padding = "5px";
labelDiv.style.borderRadius = "5px";

const label = new CSS2DObject(labelDiv);
label.position.set(0, 1.2, 0);
sphere.add(label);
```

### 5. Render the Scene

```javascript
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}
animate();
```

## Handling Window Resizing

```javascript
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});
```

## Conclusion

This guide introduces `CSS2DRenderer` in `three.js`, helping you add 2D HTML elements to a 3D scene. You can enhance this example by adding interactivity, animations, or integrating it with other UI libraries.
