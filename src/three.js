/* eslint-disable no-restricted-globals */
import *  as THREE from "three";
import { SphereGeometry } from "three";

export default function makeGuy(){
   const scene = new THREE.Scene();
   const cam = new THREE.PerspectiveCamera(
      75, innerWidth / innerHeight, 0.1, 1000
   );

   const renderer = new THREE.WebGLRenderer(
      {}
   );
   renderer.setSize(innerWidth, innerHeight);
   document.getElementById("animation").appendChild(renderer.domElement);

   const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 30, 30), 
      new THREE.MeshBasicMaterial({
         //map: new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/test.jpg"),
         map: new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/zakoletekstura.png"),
      }))
      const cone = new THREE.Mesh(
         new THREE.ConeGeometry(3, 4, 25, 20), 
         new THREE.MeshBasicMaterial({
            //map: new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/test.jpg"),
            map: new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/zakoletekstura.png"),
         }))
   scene.add(sphere);
   scene.add(cone);
   //modyfikacja stozka
   cone.position.x = 5;
   //modyfikacja sfery
   sphere.position.x = -2;
   //modyfikacja kamery
   cam.position.z = 7;
   cam.position.x = 2;
   cam.position.y = 0;

   function animate(){
      requestAnimationFrame(animate);
      renderer.render(scene, cam);
      sphere.rotation.y += 0.015;
      cone.rotation.y += 0.015;
   }
   animate();
   console.log("done");
}