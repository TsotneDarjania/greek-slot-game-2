import { Game } from "../entities/game";
import { Scene, SceneAssetsType } from "../entities/scene";
import { GamePLayObjectNames } from "../config/loadConfig";
import { Board } from "../board";
import { CustomSprite } from "../global/customGameObjects/customSprite";
import { UI } from "../ui";
import { GameManager } from "../core/gameManager";
import { Howl } from "howler";

export class GamePlayScene extends Scene {
  background!: CustomSprite;
  ui!: UI;
  gameManager!: GameManager;
  board!: Board;
  backgroundMusic!: Howl;

  constructor(game: Game, assets: SceneAssetsType) {
    super(game, assets);
  }

  // This function will be automatically invoked after the assets are loaded.
  start(): void {
    this.addBackgorund();
    this.addBoard();
    this.addUI();
    this.createGameManager();

    this.backgroundMusic = new Howl({
      src: ["/assets/music.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.2,
    });
  }

  createGameManager() {
    this.gameManager = new GameManager(this);
  }

  addBackgorund() {
    this.background = new CustomSprite(
      GamePLayObjectNames.BackgroundImage,
      0,
      0
    );
    this.setFixedBackground(this.background);
  }

  addUI() {
    this.ui = new UI(this);
    this.ui.scale = this.getScale(1.08);
    this.ui.x = this.getX(0.5);
    this.ui.y = this.getY(1) - this.ui.background.getBounds().height / 2;
  }

  addBoard() {
    // Limitaions
    // 1. width and height of source images should be same
    this.board = new Board(this.width / 2 - 3, this.height / 2 + 5, 425, 380, {
      reelsCount: 3,
      symbolsPerReel: 3,
      spinDelayBetweenReels: 200, // in miliseconds
      symbolKeys: [
        GamePLayObjectNames.Arpha,
        GamePLayObjectNames.Coin,
        // GamePLayObjectNames.Crown,
        GamePLayObjectNames.Ring_1,
        GamePLayObjectNames.Ring_2,
        // GamePLayObjectNames.Ring_3,
        GamePLayObjectNames.Ring_4,
        GamePLayObjectNames.Wine,
      ],
      initCombination: [
        [5, 1, 2],
        [3, 4, 0],
        [0, 5, 0],
      ],
      config: {
        symbolTextureOriginalWidth: 530,
        symbolTextureOriginalHeight: 964,
      },
      padding: 6,
      spinDuration: 0.16,
      spinStyle: "classic",
    });
    this.add(this.board);

    this.board.scale = this.getScale(3.6);
  }
}
