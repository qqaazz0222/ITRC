const Matter = require("matter-js");

const block = () => {
    const canvas = document.querySelector("#BlockArea");
    let cw = canvas.offsetWidth;
    let ch = canvas.offsetHeight;

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // 엔진 생성
    var engine = Engine.create(),
        world = engine.world;

    // 렌더러 생성
    var render = Render.create({
        element: canvas,
        engine: engine,
        options: {
            width: cw,
            height: ch,
            pixelRatio: window.devicePixelRatio,
            background: "#EEEEEE",
            wireframes: false,
        },
    });

    // 경계 생성
    const wallOptions = {
        isStatic: true,
        restitution: 0.9, // 반발력 조정
        friction: 0.1, // 마찰력 조정
        render: {
            visible: false,
        },
    };

    // 벽, 바닥, 천장 생성
    const ceiling = Bodies.rectangle(cw / 2, -100, cw, 10, wallOptions);
    const ground = Bodies.rectangle(cw / 2, ch, cw, 10, wallOptions);
    const leftWall = Bodies.rectangle(0, ch / 2, 10, ch, wallOptions);
    const rightWall = Bodies.rectangle(cw, ch / 2, 10, ch, wallOptions);

    var radius = 20;

    // 위치 랜덤
    function getRandomPosition() {
        const minXRatio = 0.1;
        const maxXRatio = 0.9;
        const minX = cw * minXRatio;
        const maxX = cw * maxXRatio;
        const x = Math.random() * (maxX - minX) + minX;
        const y = 0;
        return { x: x, y: y };
    }

    // 객체생성
    const UXUIPos = getRandomPosition();
    const UXUI = Bodies.rectangle(UXUIPos.x, UXUIPos.y, 105, 44, {
        chamfer: { radius: radius },
        render: { sprite: { texture: "@/assets/images/block/block_uxui.png" } },
    });
    // const UXUI = Bodies.rectangle(UXUIPos.x, UXUIPos.y, 105, 44, {chamfer: {radius: radius}, render: { sprite: { texture: '@/assets/images/block/block_uxui.png'}}, url: 'https://www.instagram.com/fuse.blog/'})

    const ResearchPos = getRandomPosition();
    const Research = Bodies.rectangle(ResearchPos.x, ResearchPos.y, 134, 44, {
        chamfer: { radius: radius },
        render: {
            sprite: { texture: "@/assets/images/block/block_Research.png" },
        },
    });

    const DevelopmentPos = getRandomPosition();
    const Development = Bodies.rectangle(
        DevelopmentPos.x,
        DevelopmentPos.y,
        170,
        44,
        {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "@/assets/images/block/block_Development.png",
                },
            },
        }
    );

    const QATestPos = getRandomPosition();
    const QATest = Bodies.rectangle(QATestPos.x, QATestPos.y, 128, 44, {
        chamfer: { radius: radius },
        render: {
            sprite: { texture: "@/assets/images/block/block_QATest.png" },
        },
    });

    const CreativePos = getRandomPosition();
    const Creative = Bodies.rectangle(CreativePos.x, CreativePos.y, 125, 44, {
        chamfer: { radius: radius },
        render: {
            sprite: { texture: "@/assets/images/block/block_Creative.png" },
        },
    });

    const AccessibilityPos = getRandomPosition();
    const Accessibility = Bodies.rectangle(
        AccessibilityPos.x,
        AccessibilityPos.y,
        118,
        44,
        {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "@/assets/images/block/block_Accessibility.png",
                },
            },
        }
    );

    const StandardsPos = getRandomPosition();
    const Standards = Bodies.rectangle(
        StandardsPos.x,
        StandardsPos.y,
        100,
        44,
        {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "@/assets/images/block/block_Standards.png",
                },
            },
        }
    );

    const DesignPos = getRandomPosition();
    const Design = Bodies.rectangle(DesignPos.x, DesignPos.y, 112, 44, {
        chamfer: { radius: radius },
        render: {
            sprite: { texture: "@/assets/images/block/block_Design.png" },
        },
    });

    const MarketingPos = getRandomPosition();
    const Marketing = Bodies.rectangle(
        MarketingPos.x,
        MarketingPos.y,
        141,
        44,
        {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "@/assets/images/block/block_Marketing.png",
                },
            },
        }
    );

    const StrategyPos = getRandomPosition();
    const Strategy = Bodies.rectangle(StrategyPos.x, StrategyPos.y, 130, 44, {
        chamfer: { radius: radius },
        render: {
            sprite: { texture: "@/assets/images/block/block_Strategy.png" },
        },
    });

    const AnalyticsPos = getRandomPosition();
    const Analytics = Bodies.rectangle(
        AnalyticsPos.x,
        AnalyticsPos.y,
        133,
        44,
        {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "@/assets/images/block/block_Analytics.png",
                },
            },
        }
    );

    const ContentsPos = getRandomPosition();
    const Contents = Bodies.rectangle(ContentsPos.x, ContentsPos.y, 134, 44, {
        chamfer: { radius: radius },
        render: {
            sprite: { texture: "@/assets/images/block/block_Contents.png" },
        },
    });

    // add all of the bodies to the world
    World.add(engine.world, [
        ground,
        ceiling,
        rightWall,
        leftWall,
        UXUI,
        Research,
        Development,
        QATest,
        Creative,
        Accessibility,
        Standards,
        Design,
        Marketing,
        Strategy,
        Analytics,
        Contents,
    ]);

    // 기본 요소 추가
    World.add(engine.world, [ground, ceiling, rightWall, leftWall]);

    // 마우스 컨트롤 추가
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.1,
                damping: 1,
                render: {
                    visible: false,
                },
            },
        });

    World.add(world, mouseConstraint);

    // 페이지 스크롤 허용
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    // 클릭 vs 드래그 감지
    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    // document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

    // 마우스 이벤트 핸들러 추가
    Events.on(mouseConstraint, "mouseup", function (event) {
        var mouseConstraint = event.source;
        var bodies = engine.world.bodies;
        if (!mouseConstraint.bodyB) {
            for (i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                // 클릭 또는 드래그 여부 확인
                if (click === true) {
                    if (
                        Matter.Bounds.contains(
                            body.bounds,
                            mouseConstraint.mouse.position
                        )
                    ) {
                        var bodyUrl = body.url;
                        console.log("Body.Url >> " + bodyUrl);
                        // 하이퍼링크 기능
                        if (bodyUrl != undefined) {
                            //window.location.href = bodyUrl;
                            window.open(bodyUrl, "_blank");
                            console.log("Hyperlink was opened");
                        }
                        break;
                    }
                }
            }
        }
    });

    let lastScroll = 0;
    window.addEventListener("scroll", function () {
        const now = Date.now();
        if (now - lastScroll > 100) {
            // 100 밀리초마다 스크롤 이벤트 처리
            lastScroll = now;
            updatePhysicsWorld(); // 물리 세계 업데이트 로직
            updateCanvasDimensions(); // 캔버스 크기를 업데이트
        }
    });

    function updateCanvasDimensions() {
        cw = canvas.offsetWidth;
        ch = canvas.offsetHeight;
        render.canvas.width = cw;
        render.canvas.height = ch;
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: cw, y: ch },
        });
    }

    function restartEngineAndRenderer() {
        Render.stop(render);
        Engine.clear(engine);
        Render.run(render);
        Engine.run(engine);
    }

    window.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
            restartEngineAndRenderer();
        }
    });

    function updatePhysicsWorld() {
        // 엔진을 업데이트 하여 물리 계산을 진행
        Engine.update(engine);
    }

    // 마우스가 캔버스 영역을 벗어났을 때 드래그 종료 처리
    render.canvas.addEventListener("mouseleave", () => {
        // 강제로 마우스 버튼이 '올라갔음'을 시뮬레이션
        mouseConstraint.mouse.button = -1;
    });

    // 마우스 드래그 중 영역 밖으로 이동하면 드래그 종료
    Events.on(mouseConstraint, "enddrag", (event) => {
        if (!Matter.Bounds.contains(render.bounds, mouse.position)) {
            mouseConstraint.mouse.button = -1;
        }
    });

    // 렌더링에 마우스 연결
    render.mouse = mouse;

    // 엔진 실행
    Engine.run(engine);

    // 렌더러 실행
    Render.run(render);

    // 창 크기 조절
    window.addEventListener("resize", function () {
        cw = canvas.offsetWidth;
        ch = canvas.offsetHeight;
        render.canvas.width = cw;
        render.canvas.height = ch;
    });
};

export { block };
