import { Container, utils } from "pixi.js";
import PitchVis from "./PitchVis";
import Ball from "./Ball"

const BallMock = Ball as jest.Mock<Ball>;

jest.mock('./Ball');

describe("PitchVis", () =>{

    beforeAll(() => {
        utils.skipHello();
    });

    describe("moveBall", () => {
        test("it moves the ball to the new position", () =>{
            const pv = new PitchVis();

            pv.moveBall(20,39);

            expect(BallMock.mock.instances[0].moveBall).toBeCalledWith(20, 39);
        })
    })
})