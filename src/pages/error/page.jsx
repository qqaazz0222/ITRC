// 라이브러리
import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const ErrorPage = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div id="testPage" className="page">
            {arr.map((number) => (
                <>
                    <Section number={number} />
                </>
            ))}
        </div>
    );
};

const Section = ({ number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", ".3 .7"],
    });
    useEffect(() => {
        console.log(number, scrollYProgress);
    }, [scrollYProgress]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
        >
            <div className="section">
                <h1>{number}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis nam corrupti architecto, ipsam omnis magni doloremque,
                    perferendis libero natus nemo quia necessitatibus facere
                    vitae beatae? Perspiciatis iure libero minima fuga.
                </p>
            </div>
        </motion.div>
    );
};

export default ErrorPage;
