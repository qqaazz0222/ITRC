// 라이브러리
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// 컴포넌트
import Header from "@/components/header/component";
import PageIn from "@/components/pageTransition/pageIn";
import PageOut from "@/components/pageTransition/pageOut";
// 스타일
import "./style.css";

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
                <Header pageOutHandler={pageOutHandler} />
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
