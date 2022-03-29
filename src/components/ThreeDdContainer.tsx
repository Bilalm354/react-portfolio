import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ASPECT_RATIO = 16 / 9;

interface ThreeDRendererProps {
  width: number,
}

// TODO: load 3d model of desk
// TODO: replace 3d model with a model of me
// TODO: or load a portfolio like an art exhibit

function addSpotlight(scene: THREE.Scene) {
  const spotLight = new THREE.SpotLight(0xffffff, 3.5);
  spotLight.position.set(10, 10, 20);

  spotLight.castShadow = true;

  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;

  spotLight.shadow.camera.near = 500;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 30;

  scene.add(spotLight);
}

export default function ThreeDViewer({ width } : ThreeDRendererProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x123456);
    const camera = new THREE
      .PerspectiveCamera(75, ASPECT_RATIO, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const height = width * (1 / ASPECT_RATIO);
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);
    const loader = new GLTFLoader();
    let model: THREE.Group;
    loader.load('3d-models/basic_bedroom_voxel/scene.gltf', (gltf) => {
      model = gltf.scene;
      model.position.set(0, -3, 0);
      model.rotateY(Math.PI / 4);
      scene.add(model);
    }, undefined, (error) => {
      // eslint-disable-next-line no-alert
      alert(error);
    });
    const light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
    addSpotlight(scene);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [width]);

  return (
    <div ref={mountRef} />
  );
}
