import { Application, Graphics} from "pixi.js";
import { Color } from "./helpers/Color";


const app = new Application({
    backgroundColor: Color.SeaGreen,
    width: 1000,
    height: 700,
});

document.body.appendChild(app.view);