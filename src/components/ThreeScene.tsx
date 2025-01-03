"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const eyeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    scene.add(eye);

    const irisGeometry = new THREE.CircleGeometry(0.4, 32);
    const irisMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const iris = new THREE.Mesh(irisGeometry, irisMaterial);
    iris.position.z = 0.9;
    eye.add(iris);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const onMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      iris.position.x = mouseX * 0.5;
      iris.position.y = mouseY * 0.5;
    };
    window.addEventListener("mousemove", onMouseMove);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
