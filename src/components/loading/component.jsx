// 라이브러리
import { useEffect } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

// eslint-disable-next-line react/prop-types
const Loading = ({ isLoading = true }) => {
    const visibleHandler = async (isLoading) => {
        const target = document.getElementById("loading");
        if (isLoading) {
            if (target.style.display === "none") {
                target.style.display = "flex";
                target.style.opacity = 1;
            }
        } else {
            target.style.opacity = 0;
            let timer = setTimeout(() => {
                target.style.display = "none";
            }, 1000);
            clearTimeout(timer);
        }
    };
    useEffect(() => {
        visibleHandler(isLoading);
    }, [isLoading]);
    return (
        <div id="loading">
            <div className="loadBarWrap flex flex-row gap-2 items-center">
                <div className="loadBar bg-white"></div>
                <div className="loadBar bg-white"></div>
                <div className="loadBar bg-white"></div>
                <div className="loadBar bg-white"></div>
                <div className="loadBar bg-white"></div>
            </div>
        </div>
    );
};

export default Loading;
