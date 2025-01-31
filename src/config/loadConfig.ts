import { SceneAssetsType } from "../entities/scene";

export enum GamePLayObjectNames {
  Arpha = "arpha",
  Ring_1 = "ring_1",
  Ring_2 = "ring_2",
  Ring_3 = "ring_3",
  Ring_4 = "ring_4",
  Coin = "coin",
  Wine = "wine",
  Crown = "crown",
  BackgroundImage = "backgroundImage",
  defaultWhiteImage = "defaultWhiteImage",
  uiBackground = "uiBackground",
  spinButton = "spinButton",
  balanceIndicator = "balanceIndicator",
  soundIndicator = "soundIndicator",
  menuButton = "menuButton",
  chooseBetButtonBackground = "chooseBetButtonBackground",
  chooseBetButtonArrow = "chooseBetButtonArrow",
  betOptionsBackground = "betOptionsBackground",
  stopSpinButton = "stopSpinButton",
}

export const gamePlayAssets: SceneAssetsType = [
  {
    alias: GamePLayObjectNames.Arpha,
    url: "../assets/animations/arpha/arpa.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Arpha + "_atlas",
    url: "../assets/animations/arpha/arpa.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Coin,
    url: "../assets/animations/coin/coini.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Coin + "_atlas",
    url: "../assets/animations/coin/coini.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Crown,
    url: "../assets/animations/crown/gvirgvini.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Crown + "_atlas",
    url: "../assets/animations/crown/gvirgvini.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_1,
    url: "../assets/animations/ring-1/Bechedi.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_1 + "_atlas",
    url: "../assets/animations/ring-1/Bechedi.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_2,
    url: "../assets/animations/ring-2/Bechedi.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_2 + "_atlas",
    url: "../assets/animations/ring-2/Bechedi.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_3,
    url: "../assets/animations/ring-3/Bechedi.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_3 + "_atlas",
    url: "../assets/animations/ring-3/Bechedi.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_4,
    url: "../assets/animations/ring-4/Bechedi.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Ring_4 + "_atlas",
    url: "../assets/animations/ring-4/Bechedi.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Wine,
    url: "../assets/animations/wine/gvino.json",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.Wine + "_atlas",
    url: "../assets/animations/wine/gvino.atlas",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },

  // Images
  {
    alias: GamePLayObjectNames.BackgroundImage,
    url: "../assets/images/background.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.defaultWhiteImage,
    url: "../assets/images/default-white-image.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.uiBackground,
    url: "../assets/images/ui-background.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.spinButton,
    url: "../assets/images/spin-button.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.balanceIndicator,
    url: "../assets/images/balance-indicator.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.soundIndicator,
    url: "../assets/images/sound-indicator.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.menuButton,
    url: "../assets/images/menu-button.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.chooseBetButtonBackground,
    url: "../assets/images/choose-bet-button-background.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.chooseBetButtonArrow,
    url: "../assets/images/choose-bet-button-arrow.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.betOptionsBackground,
    url: "../assets/images/bet-options-background.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
  {
    alias: GamePLayObjectNames.stopSpinButton,
    url: "../assets/images/stop-spin-button.png",
    data: {
      scaleMode: "linear",
      autoGenerateMipMaps: true,
    },
  },
];
