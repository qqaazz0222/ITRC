// 라이브러리
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router-dom";
import PageInit from "@/hooks/usePageInit";
// 서비스
// 컴포넌트
// 아이콘
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
// 이미지
import ModelDetect from "@/assets/images/model-detect-w-640.png";
import ModelQNA from "@/assets/images/model-qna-w-640.png";
import Object1 from "@/assets/images/obj1.png";
import Object2 from "@/assets/images/obj2.png";
import Object3 from "@/assets/images/obj3.png";
import Object4 from "@/assets/images/obj4.png";
import Object5 from "@/assets/images/obj5.png";
import Object6 from "@/assets/images/obj6.png";
import Object7 from "@/assets/images/obj7.png";
// 스타일
import "./animation.css";
import "./style.css";

const LandingPage = () => {
    // const { pageOutHandler } = useOutletContext();
    const [currentContent, setCurrentContent] = useState(0);
    const [s1Ref, s1InView] = useInView();
    const [s2Ref, s2InView] = useInView();
    const [s2ArticleRef, s2ArticleInView] = useInView();
    const [s2Contentref, s2ContentInView] = useInView();
    const [s3Ref, s3InView] = useInView();
    const section1BgHandler = () => {
        const target = document.querySelector("#landingPage .section1");
        window.addEventListener("scroll", function () {
            const y = (window.scrollY / window.innerHeight) * 150 + 50;
            target.style.backgroundPosition = `50% ${y}%`;
        });
    };
    const section2CurrentContentHandler = (type = "") => {
        const contents = document.querySelectorAll(
            "#landingPage .section2 .article .contentContainer .contentSlideWrap .content"
        );
        if (type === "+" && currentContent < contents.length - 4) {
            setCurrentContent(currentContent + 1);
        } else if (type === "-" && currentContent > 0) {
            setCurrentContent(currentContent - 1);
        }
    };
    const section2ContentHandler = (idx) => {
        if (s2ContentInView) {
            const target = document.querySelector(
                "#landingPage .section2 .article .contentContainer .contentSlideWrap"
            );
            const contentWidth = document.querySelector(
                "#landingPage .section2 .article .contentContainer .contentSlideWrap .content"
            ).offsetWidth;
            target.style.translate = `${-idx * (contentWidth + 12)}px 0`;
        }
    };
    const backgroundHandler = () => {
        const target = document.getElementById("landingPage");
        // const section1 = document.getElementsByClassName("section1");
        const section2 = document.getElementsByClassName("section2")[0];
        console.log(section2);
        // const section3 = document.getElementsByClassName("section3");
        if (s1InView) {
            console.log("1번 섹션 보이는중");
            target.style.background = "white";
        }
        if (s2InView) {
            console.log("2번 섹션 보이는중");
            target.style.background = "white";
            section2.style.filter = "blur(0px)";
        }
        if (s3InView) {
            console.log("3번 섹션 보이는중");
            target.style.background = "white";
            section2.style.filter = "blur(4px)";
        }
    };
    useEffect(() => {
        // PageInit();
        section1BgHandler();
    }, []);
    useEffect(() => {
        section2ContentHandler(currentContent);
    }, [currentContent]);
    useEffect(() => {
        backgroundHandler();
    }, [s1InView, s2InView, s3InView]);
    return (
        <div id="landingPage" className="page">
            <div className="section section1" ref={s1Ref}>
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
                <img className="object obj1" src={Object1} alt="" />
                <img className="object obj2" src={Object2} alt="" />
                <img className="object obj3" src={Object3} alt="" />
                <img className="object obj4" src={Object4} alt="" />
                <img className="object obj5" src={Object5} alt="" />
                <img className="object obj6" src={Object6} alt="" />
                <img className="object obj7" src={Object7} alt="" />
            </div>
            <div className="section section2" ref={s2Ref}>
                <div className="article" ref={s2ArticleRef}>
                    {s2ArticleInView && (
                        <>
                            <div className="sectionTitle">즐겨보는 AI</div>
                            <div className="sectionDesc">
                                인공지능은 이미 우리의 삶속에 들어와 있어요.
                                <br />
                                점점 더 발전하는 인공지능이 앞으로 우리의 삶에
                                어떻게 사용될지 알아봐요.
                            </div>
                        </>
                    )}

                    {(s2ArticleInView || s2ContentInView) && (
                        <>
                            <div
                                className="contentContainer"
                                ref={s2Contentref}
                            >
                                <div className="contentSlideWrap">
                                    <ContentCard
                                        thumb={ModelDetect}
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                    <ContentCard
                                        thumb={ModelQNA}
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                    <ContentCard
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                    <ContentCard
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                    <ContentCard
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                    <ContentCard
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                    <ContentCard
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                    <ContentCard
                                        tags={["태그1", "태그2"]}
                                        desc={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                        url={"/detail"}
                                    />
                                </div>
                                <div
                                    className="controlBtn prvBtn"
                                    onClick={() => {
                                        section2CurrentContentHandler("-");
                                    }}
                                >
                                    <ArrowLeft className="w-6 h-6" />
                                </div>
                                <div
                                    className="controlBtn nxtBtn"
                                    onClick={() => {
                                        section2CurrentContentHandler("+");
                                    }}
                                >
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="section section3" ref={s3Ref}>
                <div className="article">
                    <div className="mainTypo">
                        <p>PARTICIPANT LABS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContentCard = ({ thumb = null, tags = [], desc = [], url = "" }) => {
    const { pageOutHandler } = useOutletContext();
    return (
        <div className="content" style={{ backgroundImage: `url(${thumb})` }}>
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
                            pageOutHandler(url);
                        }}
                    >
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
};

export default LandingPage;
