import { Graphics} from "pixi.js";
import PitchVis from "./PitchVis";
import gsap from "gsap";

jest.mock('gsap');


describe("PitchVis", () =>{
    describe("moveBall", () => {
        test("it moves the ball to the new position", () =>{

            const pv = new PitchVis();

            pv.moveBall(20,39);

            expect(gsap.to).toBeCalledWith(expect.any(Graphics), {
              x: 20,
              y: 39,
              duration: 2
            });
        })
    })
})