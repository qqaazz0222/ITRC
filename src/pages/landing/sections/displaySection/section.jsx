// 라이브러리
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useTheme from "@/hooks/useTheme";
// 서비스
// 컴포넌트
// 이미지
import IphoneMockUp from "@/assets/images/iphone-mockup.png";
// 아이콘
import { ArrowLeft, ArrowRight } from "lucide-react";
// 스타일
import "./style.css";

const DisplaySection = () => {
    const Themes = ["yellow", "orange", "red", "black", "white"];
    const [currentIdx, setCurrentIdx] = useState(0);
    const displaySectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: displaySectionRef,
        offset: ["start end", "end end"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-115svh", "-50%"]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1.2]);
    const themeHandler = useTheme;
    const indexHandler = (type) => {
        if (type === "next") {
            setCurrentIdx(currentIdx + 1);
        } else {
            setCurrentIdx(currentIdx - 1);
        }
    };
    const indecatorHandler = (index) => {
        const target = document.querySelector("#displaySection .indecator");
        target.style.transform = `translateY(-${3 * index + 0.25}rem)`;
    };
    useEffect(() => {
        themeHandler(Themes[currentIdx]);
        indecatorHandler(currentIdx);
    }, [currentIdx]);
    return (
        <div id="displaySection" className="section" ref={displaySectionRef}>
            <motion.div
                className="iphone-mock-wrap"
                style={{
                    x: "-50%",
                    y,
                    scale,
                }}
            >
                <img className="frame" src={IphoneMockUp} alt="Frame" />
            </motion.div>
            <div className="controlWrap">
                <div
                    className="btn prev"
                    onClick={() => {
                        indexHandler("prev");
                    }}
                >
                    <ArrowLeft className="w-6 h-6" />
                </div>
                <div className="indecator">
                    {Themes.map((theme, idx) => (
                        <div className="option" key={`theme${idx}`}>
                            {theme}
                        </div>
                    ))}
                </div>
                <div
                    className="btn next"
                    onClick={() => {
                        indexHandler("next");
                    }}
                >
                    <ArrowRight className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default DisplaySection;
