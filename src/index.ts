import { Application, Graphics} from "pixi.js";
import { Color } from "./helpers/Color";
import gsap from "gsap";
import PitchVis from "./PitchVis";

const pitchVis = new PitchVis();

document.body.appendChild(pitchVis.getApp().view);

setTimeout(() => {
  pitchVis.moveBall(250, 175);
}, 1000)

setTimeout(() => {
  pitchVis.moveBall(450, 90);
}, 6000)

// const app = new Application({
//     backgroundColor: Color.SeaGreen,
//     width: 500,
//     height: 350,
// });


// const ball = new Graphics();
// ball.beginFill(Color.GhostWhite);
// ball.drawCircle(20, 20, 10);

// app.stage.addChild(ball);

// gsap.to(ball, {
//     x: 250,
//     y: 175,
//     delay: 1,
//     duration: 2
// });

// gsap.to(ball, {
//     x:450,
//     y:90,
//     duration: 4,
//     delay:5
// });
