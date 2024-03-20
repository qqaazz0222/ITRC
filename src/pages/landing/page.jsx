// 라이브러리
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router-dom";
import PageInit from "@/hooks/usePageInit";
import useTheme from "@/hooks/useTheme";
// 서비스
// 섹션
import ModelSection from "./sections/modelSection/section";
import WelcomeSection from "./sections/welcomeSection/section";
import DisplaySection from "./sections/displaySection/section";
// 컴포넌트
// 아이콘
// 이미지
// 스타일
import "./animation.css";
import "./style.css";

const LandingPage = () => {
    const Themes = ["yellow", "orange", "red", "black", "white"];
    const [currentTheme, setCurrentTheme] = useState("init");
    const { pageOutHandler } = useOutletContext();
    const themeHandler = useTheme;
    const [welcomeSectionRef, welcomeSectionInView] = useInView();
    const [displaySectionRef, displaySectionInView] = useInView();
    const [modelSectionRef, modelSectionInView] = useInView();

    const backgroundHandler = () => {
        const section1 = document.getElementById("section1");
        if (welcomeSectionInView) {
            console.log("1번 섹션 보이는중");
        }
        if (displaySectionInView) {
            console.log("2번 섹션 보이는중");
            section1.style.opacity = 1;
            themeHandler(currentTheme);
        }
        if (modelSectionInView) {
            section1.style.opacity = 0;
            themeHandler("white");
        }
    };
    useEffect(() => {
        PageInit();
        themeHandler("init");
    }, []);
    useEffect(() => {
        backgroundHandler();
    }, [welcomeSectionInView, displaySectionInView, modelSectionInView]);
    useEffect(() => {
        themeHandler(currentTheme);
    }, [currentTheme]);
    return (
        <div id="landingPage" className="page">
            <div id="section1" style={{ height: "100svh", zIndex: 1 }}>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                    }}
                    ref={welcomeSectionRef}
                >
                    <WelcomeSection />
                </div>
            </div>
            <div
                id="section2"
                style={{ position: "relative", zIndex: 2 }}
                ref={displaySectionRef}
            >
                <DisplaySection
                    themes={Themes}
                    currentTheme={currentTheme}
                    setCurrentTheme={(theme) => {
                        setCurrentTheme(theme);
                    }}
                />
            </div>
            <div
                id="section3"
                style={{ position: "relative", zIndex: 3 }}
                ref={modelSectionRef}
            >
                <ModelSection pageOutHandler={pageOutHandler} />
            </div>
            <div></div>
        </div>
    );
};

export default LandingPage;
