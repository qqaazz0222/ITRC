// 라이브러리
import useTheme from "@/hooks/useTheme";
import { useEffect } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const DeveloperPage = () => {
    useEffect(() => {
        useTheme("white");
    }, []);
    return (
        <div id="developerPage" className="page">
            <div className="article">
                <div className="group">컴퓨터 & AI 학과</div>
                <div className="group">HRI Lab</div>
                <div className="group">PLASS Lab</div>
                <div className="group">CB Lab</div>
                <div className="group">CSDC Lab</div>
            </div>
        </div>
    );
};

export default DeveloperPage;
