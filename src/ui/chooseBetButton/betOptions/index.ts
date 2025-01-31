import { GamePLayObjectNames } from "../../../config/loadConfig";
import { CustomSprite } from "../../../global/customGameObjects/customSprite";
import { Container } from "pixi.js";
import gsap from "gsap";

export class BetOptions extends Container {
  background!: CustomSprite;

  constructor() {
    super();
    this.scale = 1.3;

    this.init();
  }

  init() {
    this.addBackground();

    this.alpha = 0;
  }

  addBackground() {
    this.background = new CustomSprite(
      GamePLayObjectNames.betOptionsBackground,
      0,
      0
    );

    this.addChild(this.background);
  }

  open() {
    gsap.to(this, {
      alpha: 1,
      duration: 0.5,
      ease: "power1.out",
    });
  }

  close() {
    gsap.to(this, {
      alpha: 0,
      duration: 0.5,
      ease: "power1.out",
    });
  }
}
