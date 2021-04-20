import { Application, Graphics} from "pixi.js";
import { Color } from "./helpers/Color";
import gsap from "gsap";


const app = new Application({
    backgroundColor: Color.SeaGreen,
    width: 500,
    height: 350,
});

document.body.appendChild(app.view);

const ball = new Graphics();
ball.beginFill(Color.GhostWhite);
ball.drawCircle(20, 20, 10);

app.stage.addChild(ball);

gsap.to(ball, {
    x: 250,
    y: 175,
    delay: 1,
    duration: 2
});

gsap.to(ball, {
    x:450,
    y:90,
    duration: 4,
    delay:5
});