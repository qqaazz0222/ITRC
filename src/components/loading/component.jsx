// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";
import { Button } from "@/components/ui/button";

const Loading = ({ isLoading = true }) => {
    const [currentState, setCurrentState] = useState(isLoading);
    useEffect(() => {
        const target = document.getElementById("loading");
        if (currentState) {
            target.style.display = "flex";
            target.style.opacity = 1;
        } else {
            target.style.opacity = 0;
            target.style.display = "hidden";
        }
    }, [currentState]);
    return (
        <div
            id="loading"
            className="fixed flex-row items-center justify-center w-svw h-svh z-50"
        >
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
