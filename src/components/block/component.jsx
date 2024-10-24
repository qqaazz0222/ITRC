// 라이브러리
import { useEffect, useRef } from "react";
import Matter from "matter-js";
// 이미지
import block_uxui from "@/assets/images/block/block_uxui.png";
import block_Research from "@/assets/images/block/block_Research.png";
import block_Development from "@/assets/images/block/block_Development.png";
import block_QATest from "@/assets/images/block/block_QATest.png";
import block_Creative from "@/assets/images/block/block_Creative.png";
import block_Accessibility from "@/assets/images/block/block_Accessibility.png";
import block_Standards from "@/assets/images/block/block_Standards.png";
import block_Design from "@/assets/images/block/block_Design.png";
import block_Marketing from "@/assets/images/block/block_Marketing.png";
import block_Strategy from "@/assets/images/block/block_Strategy.png";
import block_Analytics from "@/assets/images/block/block_Analytics.png";
import block_Contents from "@/assets/images/block/block_Contents.png";
// 스타일
import "./style.css";

const Block = () => {
    const containerRef = useRef();
    const canvasRef = useRef();
    useEffect(() => {
        let Engine = Matter.Engine;
        let Render = Matter.Render;
        let World = Matter.World;
        let Bodies = Matter.Bodies;
        let Composite = Matter.Composite;

        let engine = Engine.create();
        const cw = containerRef.current.clientWidth;
        const ch = containerRef.current.clientHeight;
        console.log(`Container width: ${cw}, height: ${ch}`);

        let render = Render.create({
            element: containerRef.current,
            engine: engine,
            canvas: canvasRef.current,
            options: {
                wireframes: false,
                width: cw,
                height: ch,
            },
        });

        const leftWall = Bodies.rectangle(0, ch / 2, 2, ch, {
            isStatic: true,
            render: { fillStyle: "red" },
        });

        const rightWall = Bodies.rectangle(cw, ch / 2, 2, ch, {
            isStatic: true,
            render: { fillStyle: "red" },
        });

        const ground = Bodies.rectangle(cw / 2, ch, cw, 2, {
            isStatic: true,
            render: { fillStyle: "red" },
        });

        World.add(engine.world, [leftWall, rightWall, ground]);

        const images = [
            block_uxui,
            block_Research,
            block_Development,
            block_QATest,
            block_Creative,
            block_Accessibility,
            block_Standards,
            block_Design,
            block_Marketing,
            block_Strategy,
            block_Analytics,
            block_Contents,
        ];

        images.forEach((src, index) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const texture = Matter.Bodies.rectangle(
                    Math.random() * 600 + 10,
                    Math.random() * 600 + 10,
                    img.width,
                    img.height,
                    {
                        render: {
                            sprite: {
                                texture: src,
                                xScale: 0.5,
                                yScale: 0.5,
                            },
                        },
                        restitution: 0.2,
                    }
                );
                World.add(engine.world, texture);
            };
        });

        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            element: canvasRef.current,
            constraint: {
                render: {
                    visible: false,
                },
                stiffness: 0.8,
            },
        });

        World.add(engine.world, mouseConstraint);

        engine.world.gravity.y = 1;

        Matter.Runner.run(engine);
        Render.run(render);
    }, []);
    return (
        <div id="Block" ref={containerRef} align="center">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default Block;
