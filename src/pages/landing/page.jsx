// 라이브러리
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
import PageOut from "@/components/pageTransition/pageOut";
// 아이콘
// 이미지
import ModelDetect from "/images/model-detect-w-640.png"
// 스타일
import "./animation.css";
import "./style.css";

const Landing = () => {
    const navigate = useNavigate();
    const [isOut, setIsOut] = useState(false);
    const [s2ref, s2InView] = useInView();
    const [s2Contentref, s2ContentInView] = useInView();
    const section1BgHandler = () => {
        const target = document.querySelector("#landingPage .section.section1");
        window.addEventListener("scroll", function () {
            const y = (window.scrollY / window.innerHeight) * 150 + 50;
            target.style.backgroundPosition = `50% ${y}%`;
        });
    };
    const navigateHandler = (setState = () => {}, url = "") => {
        setState(true);
        setTimeout(() => {
            navigate(url);
        }, 1000);
    };
    useEffect(() => {
        section1BgHandler();
    }, []);
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
                    {(s2InView || s2ContentInView) && (
                        <div className="contentWrap" ref={s2Contentref}>
                            <div className="content">
                                <div className="contentWrap">
                                    <div className="contentHeader">
                                        <div className="tags">
                                            <div className="tag">test</div>
                                        </div>
                                        <div
                                            className="link"
                                            onClick={() => {
                                                navigateHandler(
                                                    setIsOut,
                                                    "/detail"
                                                );
                                            }}
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7 5H19V17"
                                                    stroke="white"
                                                    stroke-width="2"
                                                />
                                                <path
                                                    d="M5 19L19 5"
                                                    stroke="white"
                                                    stroke-width="2"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </div>
                                </div>
                            </div>
                            <ContentCard thumb={ModelDetect} tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            <ContentCard tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            <ContentCard tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            <ContentCard tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            <ContentCard tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            <ContentCard tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            <ContentCard tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            <ContentCard tags={["태그1" , "태그2"]} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} navigateHandler={navigateHandler} setIsOut={setIsOut}/>
                            
                        </div>
                    )}
                </div>
            </div>
            <div className="section section3">
                <button
                    onClick={() => {
                        navigateHandler(setIsOut, "/detail");
                    }}
                >
                    테스트
                </button>
            </div>
            {isOut && <PageOut />}
        </div>
    );
};

const ContentCard = ({
    thumb = null,
    tags = [],
    desc = [],
    navigateHandler = () => {},
    setIsOut = () => {},
}) => {
    return (
        <div className="content" style={{backgroundImage: `${thumb}`}}>
            <div className="contentWrap">
                <div className="contentHeader">
                    <div className="tags">
                        {tags.map((tag, idx) => (
                            <div className="tag" key={`tag${idx}`}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div
                        className="link"
                        onClick={() => {
                            navigateHandler(setIsOut, "/detail");
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7 5H19V17"
                                stroke="white"
                                stroke-width="2"
                            />
                            <path
                                d="M5 19L19 5"
                                stroke="white"
                                stroke-width="2"
                            />
                        </svg>
                    </div>
                </div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
};

export default Landing;
