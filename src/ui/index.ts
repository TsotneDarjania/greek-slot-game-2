import { GamePLayObjectNames } from "../config/loadConfig";
import { CustomSprite } from "../global/customGameObjects/customSprite";
import { GamePlayScene } from "../scenes/gameplay";
import { Container, EventEmitter } from "pixi.js";
import { SpinButton } from "./spinButton";
import { GameEvenetEnums } from "../enums/gameEventEnums";
import { uiIndicator } from "./indicator";
import { ChooseBetButton } from "./chooseBetButton";

export class UI extends Container {
  eventEmitter!: EventEmitter;
  background!: CustomSprite;

  spinButton!: SpinButton;
  stopSpinButton!: CustomSprite;

  balanceIndicator!: uiIndicator;
  soundButton!: CustomSprite;
  menuButton!: CustomSprite;
  chooseBetButton!: ChooseBetButton;

  constructor(public scene: GamePlayScene) {
    super();
    this.eventEmitter = new EventEmitter();
    scene.add(this);
    this.init();
  }

  init() {
    this.addBackground();

    this.addSpinButton();
    this.addStopSpinButton();

    this.addBalanceIndicator();
    this.addSoundButton();
    this.addMenuButton();
    this.addChooseBetButton();
  }

  addBackground() {
    this.background = new CustomSprite(GamePLayObjectNames.uiBackground, 0, 0);
    this.background.height = 500;
    this.addChild(this.background);
  }

  addSpinButton() {
    this.spinButton = new SpinButton(
      GamePLayObjectNames.spinButton,
      0,
      -this.height / 2
    );
    this.addChild(this.spinButton);

    this.spinButton.addInteractiveEvenet("pointerdown", () => {
      this.eventEmitter.emit(GameEvenetEnums.clickSpinButton);
    });
  }

  addStopSpinButton() {
    this.stopSpinButton = new CustomSprite(
      GamePLayObjectNames.stopSpinButton,
      0,
      -this.height / 2 + 132
    );
    this.addChild(this.stopSpinButton);

    this.stopSpinButton.addInteractiveEvenet("pointerdown", () => {
      this.eventEmitter.emit(GameEvenetEnums.clickStopButton);
    });

    this.stopSpinButton.alpha = 0;
    this.stopSpinButton.interactive = false;
  }

  addBalanceIndicator() {
    this.balanceIndicator = new uiIndicator(
      GamePLayObjectNames.balanceIndicator,
      0,
      0,
      "0"
    );
    this.balanceIndicator.scale = 1.3;

    this.balanceIndicator.x =
      -this.width / 2 + this.balanceIndicator.getBounds().width / 2 + 30;

    this.balanceIndicator.y =
      -this.background.height / 2 +
      this.balanceIndicator.getBounds().height / 2 +
      50;

    this.addChild(this.balanceIndicator);
  }

  addSoundButton() {
    this.soundButton = new CustomSprite(
      GamePLayObjectNames.soundIndicator,
      0,
      0
    );
    this.soundButton.scale = 1.3;
    this.soundButton.x =
      -this.width / 2 + this.soundButton.getBounds().width / 2 + 30;

    this.soundButton.y =
      this.background.height / 2 - this.soundButton.getBounds().height / 2 - 50;
    this.addChild(this.soundButton);
  }

  addMenuButton() {
    this.menuButton = new CustomSprite(GamePLayObjectNames.menuButton, 0, 0);
    this.menuButton.scale = 1.3;
    this.menuButton.x =
      this.width / 2 - this.menuButton.getBounds().width / 2 - 30;

    this.menuButton.y =
      this.background.height / 2 - this.soundButton.getBounds().height / 2 - 50;
    this.addChild(this.menuButton);
  }

  addChooseBetButton() {
    this.chooseBetButton = new ChooseBetButton(this, "0 BET");
    this.chooseBetButton.scale = 1.3;

    this.chooseBetButton.x =
      this.width / 2 - this.chooseBetButton.getBounds().width / 2 - 30;

    this.chooseBetButton.y =
      -this.background.height / 2 +
      this.chooseBetButton.getBounds().height / 2 +
      50;

    this.chooseBetButton.betOptions.x = this.chooseBetButton.x;
    this.chooseBetButton.betOptions.y -= this.chooseBetButton.height / 2 + 20;
    this.addChild(this.chooseBetButton);
  }
}
