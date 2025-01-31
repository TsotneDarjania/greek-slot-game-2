import { CustomSprite } from "../../global/customGameObjects/customSprite";
import { Container } from "pixi.js";
import { GamePLayObjectNames } from "../../config/loadConfig";
import { CustomText } from "../../global/customGameObjects/customText";
import { UI } from "..";
import { BetOptions } from "./betOptions";
import gsap from "gsap";

export class ChooseBetButton extends Container {
  background!: CustomSprite;
  arrow!: CustomSprite;
  text!: CustomText;
  betOptions!: BetOptions;

  isOptionsOpen = false;

  constructor(public ui: UI, public innerText: string) {
    super();

    this.init();
  }

  init() {
    this.addBackground();
    this.addArrow();
    this.addText();
    this.addOptions();
    this.makeClickable();
  }

  makeClickable() {
    this.interactive = true;
    this.addEventListener("pointerdown", () => {
      if (this.isOptionsOpen) {
        this.betOptions.close();
        this.isOptionsOpen = false;

        gsap.to(this.arrow, {
          rotation: 0,
          duration: 0.5,
          ease: "power1.out",
        });

        return;
      } else {
        this.betOptions.open();
        this.isOptionsOpen = true;

        gsap.to(this.arrow, {
          rotation: 3.14,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    });
  }

  addOptions() {
    this.betOptions = new BetOptions();
    this.betOptions.y -= 560;
    this.ui.addChild(this.betOptions);
  }

  addBackground() {
    this.background = new CustomSprite(
      GamePLayObjectNames.chooseBetButtonBackground,
      0,
      0
    );

    this.addChild(this.background);
  }

  addArrow() {
    this.arrow = new CustomSprite(
      GamePLayObjectNames.chooseBetButtonArrow,
      this.getBounds().width / 2 - 60,
      0
    );

    this.addChild(this.arrow);
  }

  addText() {
    this.text = new CustomText(this.innerText, -25, 0, {
      color: "white",
      fontSize: "60",
    });
    this.addChild(this.text);
  }
}
