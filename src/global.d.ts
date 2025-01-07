declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader } from "three";
  import { Object3D } from "three";

  export class GLTFLoader extends Loader {
    load(
      url: string,
      onLoad: (gltf: { scene: Object3D }) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

declare module "three/examples/jsm/controls/OrbitControls" {
  import { Camera, EventDispatcher, Vector3 } from "three";

  export class OrbitControls extends EventDispatcher {
    constructor(camera: Camera, domElement: HTMLElement);

    target: Vector3;
    enableDamping: boolean;
    dampingFactor: number;

    update(): void;
    dispose(): void;
  }
}
