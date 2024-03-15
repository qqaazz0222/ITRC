// 라이브러리
import { Outlet, useNavigate } from "react-router-dom";
// 컴포넌트
import PageIn from "@/components/pageTransition/pageIn";
// 스타일
import "./style.css";
import PageOut from "@/components/pageTransition/pageOut";
import { useEffect, useState } from "react";

const LandingLayout = () => {
    const navigate = useNavigate();
    const [isIn, setIsIn] = useState(true);
    const [isOut, setIsOut] = useState(false);
    const pageInHandler = () => {
        setTimeout(() => {
            setIsIn(false);
        }, 1000);
    };
    const pageOutHandler = (url = "") => {
        setIsOut(true);
        setTimeout(() => {
            navigate(url);
        }, 1000);
    };
    useEffect(() => {
        pageInHandler();
    }, []);
    return (
        <>
            <div id="landingLayout">
                <Outlet
                    context={{
                        pageOutHandler,
                    }}
                />
            </div>
            {(isIn || isOut) && (
                <div id="pageTransition">
                    {isIn && <PageIn animation="fade" />}
                    {isOut && <PageOut />}
                </div>
            )}
        </>
    );
};

export default LandingLayout;
