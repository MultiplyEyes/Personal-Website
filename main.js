import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 5, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
let sword;

const loader = new GLTFLoader();

loader.load( 'Longsword.glb', function ( gltf ) {

    sword = gltf.scene;
	//scene.add( sword );

}, undefined, function ( error ) {

	console.error( error );

} );

scene.add( cube );

scene.background = new THREE.Color( 0xFF0000);

camera.position.z = 5;

function animate() {

	cube.rotation.z += 0.02;
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

	renderer.render( scene, camera );

}