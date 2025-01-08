"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import throttle from "lodash/throttle";

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
    camera.position.set(0, 1, 400);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    let eyeModel: THREE.Object3D | null = null;
    const loader = new GLTFLoader();
    loader.load(
      "/scene.gltf",
      (gltf) => {
        eyeModel = gltf.scene;
        eyeModel.scale.set(0.5, 0.5, 0.5);
        scene.add(eyeModel);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error.message);
      }
    );

    const onMouseMove = throttle((event: MouseEvent) => {
      if (!eyeModel) return;

      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const maxRotation = Math.PI / 6;
      eyeModel.rotation.y = THREE.MathUtils.clamp(
        mouseX * maxRotation,
        -maxRotation,
        maxRotation
      );
      eyeModel.rotation.x = THREE.MathUtils.clamp(
        -mouseY * maxRotation,
        -maxRotation,
        maxRotation
      );
    }, 50);

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}
