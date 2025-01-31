import { Text } from "pixi.js";

export class CustomText extends Text {
  constructor(
    public innerText: string,
    public xPos: number,
    public yPos: number,
    public styleData?: {
      fontFamily?: string;
      fontSize?: string;
      color?: string
    }
  ) {
    super({ text: innerText });
    this.x = xPos;
    this.y = yPos;
    this.anchor = 0.5;

    if (styleData) {
      this.style.fontFamily = styleData.fontFamily ? styleData.fontFamily : "";
      this.style.fontSize = styleData.fontSize ? styleData.fontSize : "1";
      this.style.fill = styleData.color ? styleData.color : "black";
    }
  }
}
