/**
 * Import the Three.js library to use its 3D rendering features.
 */
import * as THREE from "three";

/**
 * Import WebGL capabilities to check if WebGL2 is available.
 */
import WebGL from "three/addons/capabilities/WebGL.js";

/**
 * Check if WebGL2 is available in the browser.
 */
if (WebGL.isWebGL2Available()) {
  /**
   * Create an h4 element and append it to the container element with the text "ThreeJS Line".
   */
  document
    .getElementById("container")
    .appendChild(document.createElement("h4")).innerText = "ThreeJS Line";

  /**
   * Create a WebGL renderer and set its size to half of the window width and height.
   */
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

  /**
   * Append the renderer's canvas element to the document body.
   */
  document.body.appendChild(renderer.domElement);

  /**
   * Create a perspective camera with:
   * - Field of view: 45 degrees
   * - Aspect ratio: Based on window size
   * - Near clipping plane: 1
   * - Far clipping plane: 500
   */
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  /**
   * Set the camera position to (0, 0, 100) and make it look at the origin (0, 0, 0).
   */
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  /**
   * Create a new Three.js scene.
   */
  const scene = new THREE.Scene();

  /**
   * Create a material for the line with a blue color (hex: 0x0000ff).
   */
  const material = new THREE.LineBasicMaterial({ color: "red" });

  /**
   * Create an array of points to define the shape of the line.
   */
  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0)); // First point (-10, 0, 0)
  points.push(new THREE.Vector3(0, 10, 0)); // Second point (0, 10, 0)
  points.push(new THREE.Vector3(10, 0, 0)); // Third point (10, 0, 0)
  points.push(new THREE.Vector4(-10, 0, 0)); // Third point (10, 0, 0)

  /**
   * Create a geometry from the points array.
   */
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  /**
   * Create a line using the geometry and material.
   */
  const line = new THREE.Line(geometry, material);

  /**
   * Add the line to the scene.
   */
  scene.add(line);

  renderer.setAnimationLoop(() => {
    // line.rotation.x = line.rotation.x - 0.01;
    // line.rotation.z = line.rotation.z - 0.01;
    line.rotation.y = line.rotation.y - 0.01;

    renderer.render(scene, camera);
  });
} else {
  /**
   * If WebGL2 is not available, display an error message.
   */
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById("container").appendChild(warning);
}
