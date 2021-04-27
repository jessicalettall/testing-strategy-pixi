import { Application, Container, Graphics, utils } from "pixi.js";
import Ball from "./Ball";
import gsap from "gsap";

const gsapTimelineMock = gsap.timeline as jest.Mock;

jest.mock('gsap');

describe("Ball", () =>{

    let app;

    beforeAll(() => {
      utils.skipHello();
      app = new Application();
    })

    describe("moveBall", () => {
        test("it moves the ball to the new position", () =>{

            const ball = new Ball(app.stage);

            ball.moveBall(20,39);

            expect(gsap.to).toBeCalledWith(expect.any(Container), {
              x: 20,
              y: 39,
              duration: 2
            });
        })
    })
    describe("animateBall", () => {
        test("it animates the ball", () => {
            const ball= new Ball(app.stage);

            const timelineMock = {
              to: jest.fn()
            }

            gsapTimelineMock.mockReturnValue(timelineMock);

            ball.animateBall();

            expect(gsap.timeline).toBeCalledWith({
                repeat: -1,
                repeatDelay: 0.5
            })

            expect(timelineMock.to).toBeCalledWith(expect.any(Graphics), {
              alpha: 0,
              duration: 2
            })

            expect(timelineMock.to).toBeCalledWith(expect.anything(), {
              x: 5,
              y: 5,
              duration: 2
            })
        })
    })
})