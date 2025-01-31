import { EventEmitter } from "pixi.js";
import { GamePlayScene } from "../scenes/gameplay";
import { GameEvenetEnums } from "../enums/gameEventEnums";

export class GameManager {
  eventEmitter!: EventEmitter;

  constructor(public gamePlayScene: GamePlayScene) {
    this.eventEmitter = new EventEmitter();

    this.addEventListeners();
  }

  addEventListeners() {
    this.gamePlayScene.board.eventEmitter.on("spinIsStarted", () => {
      this.gamePlayScene.ui.spinButton.interactive = false;
      this.gamePlayScene.ui.spinButton.alpha = 0;

      this.gamePlayScene.ui.stopSpinButton.interactive = true;
      this.gamePlayScene.ui.stopSpinButton.alpha = 1;
    });

    this.gamePlayScene.board.eventEmitter.on("spinIsFinished", () => {
      this.gamePlayScene.ui.spinButton.interactive = true;
      this.gamePlayScene.ui.spinButton.alpha = 1;

      this.gamePlayScene.ui.stopSpinButton.interactive = false;
      this.gamePlayScene.ui.stopSpinButton.alpha = 0;
    });

    // Click Spin Button
    this.gamePlayScene.ui.eventEmitter.on(
      GameEvenetEnums.clickSpinButton,
      () => {
        if (this.gamePlayScene.board.state !== "readyForSpin") return;

        this.gamePlayScene.ui.spinButton.alpha = 0.6;
        this.gamePlayScene.ui.spinButton.interactive = false;

        this.gamePlayScene.board.startSpin();
      }
    );

    // Stop Spin Button
    this.gamePlayScene.ui.eventEmitter.on(
      GameEvenetEnums.clickStopButton,
      () => {
        if (this.gamePlayScene.board.state !== "spinning") return;
        this.gamePlayScene.ui.stopSpinButton.alpha = 0.6;
        this.gamePlayScene.ui.stopSpinButton.interactive = false;

        // this.gamePlayScene.ui.spinButton.interactive = true;
        // this.gamePlayScene.ui.spinButton.alpha = 1;

        // this.gamePlayScene.ui.stopSpinButton.interactive = false;
        // this.gamePlayScene.ui.stopSpinButton.alpha = 0;

        this.gamePlayScene.board.stopSpin(
          [
            [0, 0, 0],
            [2, 3, 0],
            [1, 1, 1],
          ],
          {
            lines: [
              [0, 0, 0],
              [1, 1, 1],
            ],
          }
        );
      }
    );
  }
}
