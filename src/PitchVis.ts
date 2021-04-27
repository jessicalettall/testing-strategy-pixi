import { Application, Graphics} from "pixi.js";
import { Color } from "./helpers/Color";
import Ball from "./Ball";
import gsap from "gsap";

export default class PitchVis {

  app: Application;
  ball: Ball;

  constructor() {

    this.app = new Application({
      backgroundColor: Color.SeaGreen,
      width: 500,
      height: 350
    });

    this.ball = new Ball(this.app.stage);
    this.ball.animateBall();
  }

  moveBall(x, y) {
    this.ball.moveBall(x,y);
  }

  getApp() {
    return this.app;
  }
}