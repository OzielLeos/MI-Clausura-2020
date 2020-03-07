//cargamos three.js
const THREE = require("three");
const clock = new THREE.Clock();
const camera = new THREE.PerspectiveCamera(
  45, //FOV
  window.innerWidth / window.innerHeight, //Aspect Ratio
  0.1, //near
  1000 //far
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0, 0, 0));
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();

const box = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color(1, 1, 0.3)
});
const cube = new THREE.Mesh(box, material);
cube.name = "cube";
scene.add(cube);
camera.position.z = 10;

const sphereG = new THREE.SphereGeometry();
const material2 = new THREE.MeshPhongMaterial({
  color: new THREE.Color(1, 1, 1)
});
const sphere = new THREE.Mesh(sphereG, material2);
sphere.position.x = 2;

const ambiental = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.4);
const directional = new THREE.DirectionalLight(new THREE.Color(1, 0, 0), 1.0);
directional.castShadow = true;
scene.add(ambiental);
scene.add(directional);

scene.add(sphere);
function update() {
  scene.getObjectByName("cube").rotation.y += 0.05;
}
var f = 1;

var f2 = 1;
var angle =0;
const animate = function() {
  // update();
  cube.rotation.x += 1 * clock.getDelta();
  if (sphere.position.x > 10) {
    f = -1;
  }
  if (sphere.position.x < -10) {
    f = 1;
  }
  sphere.position.x += f * 20000 * clock.getDelta();
  

//   if (cube.position.y > 3) {
//     f2 = -1;
//   }
//   if (cube.position.y < -3) {
//     f2 = 1;
//   }
//   if (angle>360) {
//     angle=0;
//   }
angle+= 20000 * clock.getDelta();
//   cube.position.y += f2 * 1000 * clock.getDelta();
//   cube.position.x = -cube.position.y;
var coseno= Math.cos(angle);
var seno= Math.sin(angle);
cube.position.x = 3 * seno;
cube.position.y = 3 * coseno;
console.log(cube.position);

requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
