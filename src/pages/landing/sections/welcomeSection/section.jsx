// 라이브러리
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// 서비스
// 컴포넌트
// 아이콘
// 동영상
import WelcomeVideo from "@/assets/videos/wave.mp4";
// 스타일
import "./style.css";

const WelcomeSection = () => {
    const mainTypoRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: mainTypoRef,
        offset: ["center", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
    return (
        <div id="welcomeSection" className="section">
            <motion.video
                className="bgVideo"
                src={WelcomeVideo}
                style={{ opacity }}
                muted
                autoPlay
                loop
                playsInline
            />
            <motion.div
                className="article"
                style={{
                    opacity,
                    scale,
                }}
            >
                <div className="mainTypo" ref={mainTypoRef}>
                    <p>Ai Play</p>
                    <p>Ground</p>
                </div>
                <div className="subTypo">Dongguk Univ.</div>
            </motion.div>
        </div>
    );
};

export default WelcomeSection;
