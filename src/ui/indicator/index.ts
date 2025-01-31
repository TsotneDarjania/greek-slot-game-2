import { CustomSprite } from "../../global/customGameObjects/customSprite";
import { CustomText } from "../../global/customGameObjects/customText";
import { Container } from "pixi.js";

export class uiIndicator extends Container {
  background!: CustomSprite;
  text!: CustomText;

  constructor(
    public aliasKey: string,
    public posX: number,
    public posY: number,
    public innerText: string
  ) {
    super();
    this.init();
  }

  init() {
    this.addBackground();
    this.addtext();
  }

  addBackground() {
    this.background = new CustomSprite(this.aliasKey, 0, 0);
    this.addChild(this.background);
  }

  addtext() {
    this.text = new CustomText(this.innerText, 0, 0, {
      fontSize: "84",
      color: "white",
    });
    this.addChild(this.text);
  }
}
