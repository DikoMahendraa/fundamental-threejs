import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js"; // correct import
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"; // correct import

import WebGL from "three/addons/capabilities/WebGL.js";

// Check if WebGL2 is available
if (WebGL.isWebGL2Available()) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight); // Full screen renderer
  document.body.appendChild(renderer.domElement);

  // Load the font asynchronously
  const loader = new FontLoader();
  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    (font) => {
      const geometry = new TextGeometry("Hello World", {
        font: font,
        size: 42,
        depth: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // Center the geometry
      geometry.center();

      // Create a material and mesh for the text
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const textMesh = new THREE.Mesh(geometry, material);
      scene.add(textMesh);

      // Set camera position
      camera.position.z = 1000;

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        textMesh.rotation.z += 0.01; // Rotate the text for some visual effect
        renderer.render(scene, camera);
      }

      animate();
    }
  );

  // Resize renderer when window size changes
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
} else {
  const warning = WebGLRenderer.getWebGL2ErrorMessage();
  document.getElementById("container").appendChild(warning);
}
