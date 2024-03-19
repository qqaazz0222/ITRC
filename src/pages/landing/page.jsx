// 라이브러리
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router-dom";
import { useThemeStore } from "@/stores/themeStore";
import PageInit from "@/hooks/usePageInit";
import useTheme from "@/hooks/useTheme";
// 서비스
// 섹션
import ModelSection from "./sections/modelSection/section";
import WelcomeSection from "./sections/welcomeSection/section";
// 컴포넌트
// 아이콘
// 이미지
// 스타일
import "./animation.css";
import "./style.css";
import DisplaySection from "./sections/displaySection/section";

const LandingPage = () => {
    const GloblaTheme = useThemeStore((state) => state.globalTheme);
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
            themeHandler(GloblaTheme);
        }
        if (modelSectionInView) {
            section1.style.opacity = 0;
            themeHandler("white");
        }
    };
    useEffect(() => {
        themeHandler("init");
    }, []);
    useEffect(() => {
        backgroundHandler();
    }, [welcomeSectionInView, displaySectionInView, modelSectionInView]);
    return (
        <div id="landingPage" className="page">
            <div id="section1" style={{ height: "100svh" }}>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                    ref={welcomeSectionRef}
                >
                    <WelcomeSection />
                </div>
            </div>
            <div
                style={{ position: "relative", zIndex: 2 }}
                ref={displaySectionRef}
            >
                <DisplaySection />
            </div>
            <div
                style={{ position: "relative", zIndex: 3 }}
                ref={modelSectionRef}
            >
                <ModelSection />
            </div>
            <div></div>
        </div>
    );
};

export default LandingPage;
