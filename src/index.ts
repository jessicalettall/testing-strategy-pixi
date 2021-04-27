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