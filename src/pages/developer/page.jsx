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
    return <div id="developerPage" className="page"></div>;
};

export default DeveloperPage;
