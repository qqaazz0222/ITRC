// 라이브러리
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router-dom";
import useTheme from "@/hooks/useTheme";
import initPage from "@/hooks/useInitPage";
// 서비스
import CommentService from "@/services/commentService";
// 섹션
import WelcomeSection from "./sections/welcomeSection/section";
import DisplaySection from "./sections/displaySection/section";
import ModelSection from "./sections/modelSection/section";
import CommentSection from "./sections/commentSection/section";
// 컴포넌트
// 아이콘
// 이미지
// 스타일
import "./animation.css";
import "./style.css";

const LandingPage = () => {
    const Themes = ["yellow", "orange", "red", "black", "white"];
    const [currentTheme, setCurrentTheme] = useState("init");
    const [commentServerStatus, setCommentServerStatus] = useState(false);
    const [commentList, setCommentList] = useState([]);
    const { pageOutHandler } = useOutletContext();
    const themeHandler = useTheme;
    const [welcomeSectionRef, welcomeSectionInView] = useInView();
    const [displaySectionRef, displaySectionInView] = useInView();
    const [modelSectionRef, modelSectionInView] = useInView();
    const [commentSectionRef, commentSectionInView] = useInView();
    const commentServerCheck = async () => {
        const response = await CommentService.serverCheck();
        if (response) {
            setCommentServerStatus(true);
        }
    };
    const getCommentAll = async () => {
        const response = await CommentService.getCommentAll();
        setCommentList(response);
    };
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
            console.log("3번 섹션 보이는중");
            section1.style.opacity = 0;
            themeHandler("white");
        }
        if (commentSectionInView) {
            console.log("4번 섹션 보이는중");
            section1.style.opacity = 0;
            themeHandler("white");
        }
    };
    useEffect(() => {
        initPage();
        themeHandler("init");
        commentServerCheck();
    }, []);
    useEffect(() => {
        backgroundHandler();
    }, [
        welcomeSectionInView,
        displaySectionInView,
        modelSectionInView,
        commentSectionInView,
    ]);
    useEffect(() => {
        themeHandler(currentTheme);
    }, [currentTheme]);
    useEffect(() => {
        if (commentServerStatus) {
            getCommentAll();
        }
    }, [commentServerStatus]);
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
            {commentServerStatus && (
                <div
                    id="section4"
                    style={{ position: "relative", zIndex: 4 }}
                    ref={commentSectionRef}
                >
                    <CommentSection
                        state={commentList}
                        onReload={getCommentAll}
                    />
                </div>
            )}
        </div>
    );
};

export default LandingPage;
