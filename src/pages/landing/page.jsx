// 라이브러리
import { useInView } from "react-intersection-observer";
// 서비스
// 컴포넌트
// 아이콘
// 이미지
import ImgAi1 from "@/assets/images/ai1.png";
import Grid from "@/assets/images/test.jpg";
// 스타일
import "./style.css";
import { useEffect } from "react";
const Landing = () => {
    const section1BgHandler = () => {
        const target = document.querySelector("#landingPage .section.section1");
        window.addEventListener("scroll", function () {
            const y = (window.scrollY / window.innerHeight) * 150 + 50;
            target.style.backgroundPosition = `50% ${y}%`;
        });
    };
    const section2Handler = () => {
        const contents = document.querySelectorAll(".section2 .content");
        console.log(contents);
        contents[0].style.animation = "contentSlideIn1 2.75s forwards";
        contents[1].style.animation = "contentSlideIn2 3s forwards";
        contents[2].style.animation = "contentSlideIn3 3s forwards";
        contents[3].style.animation = "contentSlideIn4 2.5s forwards";
        contents[4].style.animation = "contentSlideIn5 2.9s forwards";
    };
    const [s2ref, s2InView] = useInView();
    useEffect(() => {
        section1BgHandler();
    }, []);
    useEffect(() => {
        if (s2InView) {
            console.log("View!!");
            section2Handler();
        } else {
            console.log("Hide!!");
        }
    }, [s2InView]);
    return (
        <div id="landingPage" className="page">
            <div className="section section1">
                <div className="article">
                    <div className="mainTypo">
                        <p>AI</p>
                        <p>
                            PLAYG<span className="outlineTypo">R</span>OU
                            <span className="outlineTypo">N</span>D
                        </p>
                        <p className="glowTypo">DGPG</p>
                    </div>
                    <div className="animationWrap">
                        <div className="mouseWrap">
                            <div className="mouseBody">
                                <div className="mouseWheel"></div>
                            </div>
                            <div className="hint">Scroll</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section2">
                <div className="article">
                    <div className="sectionTitle" ref={s2ref}>
                        즐겨보는 AI
                    </div>
                    <div className="sectionDesc">
                        인공지능은 이미 우리의 삶속에 들어와 있어요.
                        <br />
                        점점 더 발전하는 인공지능이 앞으로 우리의 삶에 어떻게
                        사용될지 알아봐요.
                    </div>
                    <div className="contentWrap">
                        <div className="content"></div>
                        <div className="content"></div>
                        <div className="content"></div>
                        <div className="content"></div>
                        <div className="content"></div>
                        <div className="content"></div>
                        <div className="content"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </div>
            <div className="section section3">1</div>
        </div>
    );
};

export default Landing;
