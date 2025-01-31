import { Game } from "../entities/game";
import { Scene, SceneAssetsType } from "../entities/scene";
import { GamePLayObjectNames } from "../config/loadConfig";
import { Board } from "../board";
import { CustomSprite } from "../global/customGameObjects/customSprite";

export class GamePlayScene extends Scene {
  background!: CustomSprite;

  constructor(game: Game, assets: SceneAssetsType) {
    super(game, assets);
  }

  // This function will be automatically invoked after the assets are loaded.
  start(): void {
    this.addBackgorund();
    this.addBoard();
  }

  addBackgorund() {
    this.background = new CustomSprite(
      GamePLayObjectNames.BackgroundImage,
      0,
      0
    );
    this.setFixedBackground(this.background);
  }

  addBoard() {
    console.log("Screen Height " + this.height);
    // Limitaions
    // 1. width and height of source images should be same
    const board = new Board(this.width / 2, this.height / 2 + 5, 420, 380, {
      reelsCount: 3,
      symbolsPerReel: 3,
      spinDelayBetweenReels: 400, // in miliseconds
      symbolKeys: [
        GamePLayObjectNames.Arpha,
        // GamePLayObjectNames.Coin,
        GamePLayObjectNames.Crown,
        // GamePLayObjectNames.Ring_1,
        // GamePLayObjectNames.Ring_2,
        // GamePLayObjectNames.Ring_3,
        // GamePLayObjectNames.Ring_4,
        // GamePLayObjectNames.Wine,
      ],
      initCombination: [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      config: {
        symbolTextureOriginalWidth: 530,
        symbolTextureOriginalHeight: 964,
      },
      padding: 20,
      spinDuration: 0.13,
      spinStyle: "classic",
    });
    this.add(board);

    window.addEventListener("pointerdown", () => {
      board.startSpin();
      board.stopSpin([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  }
}
