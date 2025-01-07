"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    let eyeModel: THREE.Object3D | null = null;

    const loader = new GLTFLoader();
    loader.load(
      "/tigers_eye/scene.gltf",
      (gltf: { scene: THREE.Object3D }) => {
        eyeModel = gltf.scene;
        
        eyeModel.rotation.y = Math.PI;

        scene.add(eyeModel);
      },
      undefined,
      (error: ErrorEvent) => {
        console.error("Erro ao carregar o modelo:", error.message);
      }
    );

    const onMouseMove = (event: MouseEvent) => {
      if (!eyeModel) return;

      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const maxRotation = Math.PI / 6;
      eyeModel.rotation.y = THREE.MathUtils.clamp(mouseX * maxRotation, -maxRotation, maxRotation);
      eyeModel.rotation.x = THREE.MathUtils.clamp(-mouseY * maxRotation, -maxRotation, maxRotation);
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}
