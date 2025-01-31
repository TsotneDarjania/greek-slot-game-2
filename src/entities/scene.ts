import { Assets, Container, ContainerChild } from "pixi.js";
import { Game } from "./game";
import { CustomSprite } from "@/global/customGameObjects/customSprite";

export type SceneAssetsType = Array<{
  alias: string;
  url: string;
  data?: {
    scaleMode?: "linear" | "nearest";
    autoGenerateMipMaps?: boolean;
  };
}>;

export abstract class Scene {
  width: number = 0;
  height: number = 0;

  mainContainer!: Container;

  fixedBackground!: CustomSprite;

  constructor(public game: Game, public assets: SceneAssetsType) {
    this.init();
  }

  async init() {
    this.mainContainer = this.game.stage;
    this.width = Number(this.game.canvas.style.width.replace("px", ""));
    this.height = Number(this.game.canvas.style.height.replace("px", ""));

    await this.load(this.assets, (progress) => {
      let loadedPercentage = Math.floor(progress * 100);
      console.log(loadedPercentage);
    });

    this.start();
  }

  async load(
    assets: Array<{
      alias: string;
      url: string;
      data?: {
        scaleMode?: "linear" | "nearest";
        autoGenerateMipmaps?: boolean;
      };
    }>,
    onProgress: (progress: number) => void
  ) {
    let loadedCount = 0;

    // Function to handle asset loading with progress tracking
    const loadAsset = async (asset: {
      alias: string;
      url: string;
      data?: {
        scaleMode?: "linear" | "nearest";
        autoGenerateMipmaps?: boolean;
      };
    }) => {
      await Assets.load({
        alias: asset.alias,
        src: asset.url,
        data: {
          scaleMode: "linear",
          autoGenerateMipMaps: true,
        },
        // ...(asset.url.includes(".atlas") && { loadParser: "loadTxt" }),
      });

      // Increment the count of loaded assets and update progress
      loadedCount++;
      const progress = loadedCount / assets.length;
      onProgress(progress);
    };

    // Load all assets with progress tracking
    await Promise.all(assets.map((asset) => loadAsset(asset)));
  }

  add(obj: ContainerChild) {
    this.mainContainer.addChild(obj);
  }

  remove(obj: ContainerChild) {
    this.mainContainer.removeChild(obj);
  }

  setFixedBackground(backgroundSprite: CustomSprite) {
    this.fixedBackground = backgroundSprite;
    this.fixedBackground.anchor = 0.5;
    this.fixedBackground.x = this.width / 2;
    this.fixedBackground.y = this.height / 2;

    const scaleX = this.width / this.fixedBackground.width;
    const scaleY = this.height / this.fixedBackground.height;
    let scale_x = Math.min(scaleX, scaleY);
    let scale_y = Math.min(scaleX, scaleY);
    this.fixedBackground.scale.set(scale_x, scale_y);

    this.add(this.fixedBackground);
  }

  getScale(scale: number) {
    return this.fixedBackground !== undefined
      ? this.fixedBackground.scale.x * scale
      : scale;
  }

  getX(x: number) {
    return this.fixedBackground !== undefined
      ? this.fixedBackground.x -
          (this.fixedBackground.texture.width * this.fixedBackground.scale.x) /
            2 +
          x * this.fixedBackground.texture.width * this.fixedBackground.scale.x
      : x;
  }

  getY(y: number) {
    return this.fixedBackground !== undefined
      ? this.fixedBackground.y -
          (this.fixedBackground.texture.height * this.fixedBackground.scale.y) /
            2 +
          y * this.fixedBackground.texture.height * this.fixedBackground.scale.y
      : y;
  }

  abstract start(): void;
}
