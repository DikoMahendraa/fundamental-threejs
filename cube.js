/**
 * Import the Three.js library to use its 3D rendering features.
 */
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

// checking compatibiliy browser
if (WebGL.isWebGL2Available()) {
  /**
   * Create a new scene where all objects (meshes, lights, cameras) will be placed.
   */
  const scene = new THREE.Scene();

  /**
   * Create a perspective camera with the following properties:
   * - Field of view (FOV): 75 degrees
   * - Aspect ratio: Based on the window size
   * - Near clipping plane: 0.1 (objects closer than this won't be rendered)
   * - Far clipping plane: 1000 (objects further than this won't be rendered)
   */
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  /**
   * Create a WebGL renderer to handle rendering the scene.
   */
  const renderer = new THREE.WebGLRenderer();

  /**
   * Set the renderer size to match the full width and height of the browser window.
   */
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

  /**
   * Set an animation loop using the `animate` function to continuously update the scene.
   */
  renderer.setAnimationLoop(animate);

  /**
   * Add the renderer's output (canvas element) to the HTML document.
   */
  document.body.appendChild(renderer.domElement);

  /**
   * Create a cube geometry with dimensions 1x1x1 (width, height, depth).
   */
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  /**
   * Create a material with a red color and no lighting effects (MeshBasicMaterial does not react to light).
   */
  // added difference color for each side of cube
  const material = new THREE.MeshBasicMaterial({
    color: "blue",
    side: THREE.DoubleSide,
  });
  const material2 = new THREE.MeshBasicMaterial({
    color: "red",
    side: THREE.DoubleSide,
  });
  const material3 = new THREE.MeshBasicMaterial({
    color: "green",
    side: THREE.DoubleSide,
  });
  const material4 = new THREE.MeshBasicMaterial({
    color: "orange",
    side: THREE.DoubleSide,
  });
  const material5 = new THREE.MeshBasicMaterial({
    color: "yellow",
    side: THREE.DoubleSide,
  });
  const material6 = new THREE.MeshBasicMaterial({
    color: "purple",
    side: THREE.DoubleSide,
  });

  /**
   * Create a mesh by combining the cube geometry and red material.
   */
  // added difference color for each side of cube
  const cube = new THREE.Mesh(geometry, [
    material,
    material2,
    material3,
    material4,
    material5,
    material6,
  ]);

  /**
   * Add the cube mesh to the scene, making it visible when rendered.
   */
  scene.add(cube);

  /**
   * Move the camera back along the Z-axis so that the cube is visible in front of it.
   */
  camera.position.z = 10;

  console.log(camera.position.z);
  setInterval(() => {
    if (camera.position.z > 2) {
      camera.position.z -= 1;
    }
  }, 1000);

  /**
   * Define the `animate` function, which updates the scene continuously.
   */
  function animate() {
    /**
     * Rotate the cube slightly on the X and Y axes during each frame to create an animation effect.
     */
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    /**
     * Render the scene from the camera’s perspective in each frame.
     */
    renderer.render(scene, camera);
  }
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById("container").appendChild(warning);
}
