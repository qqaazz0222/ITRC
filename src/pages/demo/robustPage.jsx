// 라이브러리
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
// 서비스
// 컴포넌트
// 아이콘
import {} from "lucide-react";
// 스타일
import "./style.css";

const typoVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};
const btnVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
        },
    },
};

const DemoRobustPage = () => {
    useEffect(() => {
        useTheme("black");
    }, []);
    return <div id="demoRobustPage" className="page"></div>;
};

export default DemoRobustPage;
