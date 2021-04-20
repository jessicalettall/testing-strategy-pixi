import { Application, Graphics} from "pixi.js";
import { Color } from "./helpers/Color";
import gsap from "gsap";

export default class PitchVis {

  app: Application;
  ball: Graphics;

  constructor() {

    this.app = new Application({
      backgroundColor: Color.SeaGreen,
      width: 500,
      height: 350
    });

    this.ball = new Graphics();
    this.ball.beginFill(Color.GhostWhite);
    this.ball.drawCircle(20, 20, 10);
    this.app.stage.addChild(this.ball);
  }

  moveBall(x, y) {
    gsap.to(this.ball, {
      x,
      y,
      duration: 2
    });
  }

  getApp() {
    return this.app;
  }
}