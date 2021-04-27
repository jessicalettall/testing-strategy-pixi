import {Container, Graphics} from "pixi.js"
import { Color } from "./helpers/Color";
import gsap from "gsap";

export default class Ball {

  container: Container;
  ball: Graphics;
  ballAnimation: Graphics;

  constructor(stage: Container) {
    this.container = new Container();
    this.ball = new Graphics();
    this.ball.beginFill(Color.LightCyan);
    this.ball.drawCircle(0,0,15);
    this.container.addChild(this.ball);
    stage.addChild(this.container);
  }

  animateBall() {
    this.ballAnimation = new Graphics();
    this.ballAnimation.lineStyle(3, Color.LightCyan);
    this.ballAnimation.drawCircle(0,0,15);
    this.container.addChild(this.ballAnimation);

    const timelineGrow = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    timelineGrow.to(this.ballAnimation.scale, {
      x: 5,
      y: 5,
      duration: 2
    });

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    timeline.to(this.ballAnimation, {
      alpha: 0,
      duration: 2
    });
  }

  moveBall(x: number, y:number) {
    gsap.to(this.container, {
      x,
      y,
      duration: 2
    });
  }
}