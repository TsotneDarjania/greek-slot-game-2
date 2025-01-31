import { calculatePercentage } from "../../../board/helper/math";
import { GamePLayObjectNames } from "../../../config/loadConfig";
import { SymbolStatusEvents } from "../../enums/index";
import { Spine } from "@esotericsoftware/spine-pixi-v8";
import { Container, EventEmitter, Sprite, Texture } from "pixi.js";

export class SlotSymbol extends Container {
  spine!: Spine;
  eventEmitter!: EventEmitter;

  constructor(
    public key: string,
    posY: number,
    public displayWidth: number,
    public displayHeight: number,
    padding: number = 0
  ) {
    super();
    this.eventEmitter = new EventEmitter();

    this.y = posY;

    this.addFakeImage();

    this.spine = Spine.from({
      skeleton: key,
      atlas: key + "_atlas",
    });

    this.spine.width = calculatePercentage(70, displayWidth) - padding;
    this.spine.height = calculatePercentage(70, displayWidth) - padding;

    this.spine.state.setAnimation(0, "Static", true);

    this.addChild(this.spine);
  }

  /*
    I was forced to add a fake image to 
    explicitly define the dimensions 
    due to PixiJS's flawed rule, 
    which automatically resizes the container.
  */
  addFakeImage() {
    const fakeImage = Sprite.from(
      Texture.from(GamePLayObjectNames.defaultWhiteImage)
    );
    fakeImage.anchor = 0.5;
    fakeImage.width = this.displayWidth;
    fakeImage.height = this.displayHeight;

    this.addChild(fakeImage);
  }

  playWinAnimation() {
    this.spine.state.setAnimation(0, "Win", false).listener = {
      complete: () => {
        this.eventEmitter.emit(SymbolStatusEvents.winninAnimationFinished);
      },
    };
  }
}
