// 라이브러리
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
// 서비스
// 컴포넌트
// 아이콘
// 이미지
import Model_1_Structure from "@/assets/images/nia.png";
// 동영상
import Model_1_1 from "@/assets/videos/video-model-1-1.mp4";
// 스타일
import "./style.css";
// JSON
import Data from "./data.json";
import { PropTypes } from "prop-types";
import useTheme from "@/hooks/useTheme";

const fadeInVariants = {
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

const ModelNiaPage = () => {
    const { pageOutHandler } = useOutletContext();
    const themeHandler = useTheme;
    const videoRef = useRef(null);
    const [contentSectionRef, contentSectionInView] = useInView();
    const Tags = ["이상행위감지", "징후감지", "범죄감지"];
    const { scrollYProgress } = useScroll({
        target: videoRef,
        offset: ["end", "end start"],
    });
    const opacity1 = useTransform(scrollYProgress, [0, 1], [0.7, 0.3]);
    const opacity2 = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const opacity3 = useTransform(scrollYProgress, [0, 1], [0.7, -0.5]);
    const scale1 = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const top1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const top2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const headerComp = document.getElementById("header");
        if (contentSectionInView) {
            themeHandler("white");
            headerComp.style.backdropFilter = "blur(8px)";
        } else {
            themeHandler("black");
            headerComp.style.backdropFilter = "none";
        }
    }, [contentSectionInView]);
    return (
        <div id="model1Page" className="page">
            <div className="titleSection" ref={videoRef}>
                <motion.video
                    style={{
                        opacity: opacity1,
                        scale: scale1,
                        top: top1,
                    }}
                    src={Model_1_1}
                    muted
                    autoPlay
                    loop
                ></motion.video>
                <motion.div
                    className="article"
                    style={{
                        opacity: opacity2,
                        scale: scale2,
                        top: top2,
                    }}
                >
                    <div className="mainTypo">
                        <motion.p variants={fadeInVariants}>
                            Project : NIA
                        </motion.p>
                    </div>
                    <div className="subTypo">
                        <motion.p variants={fadeInVariants}>
                            Abnormal Behavior Detection
                        </motion.p>
                    </div>
                    <div className="tags">
                        {Tags.map((tag, idx) => (
                            <div className="tag" key={`tag${idx}`}>
                                #{tag}
                            </div>
                        ))}
                    </div>
                    <div
                        className="tryOutBtn"
                        onClick={() => {
                            pageOutHandler("/demo/nia");
                        }}
                    >
                        <motion.p variants={fadeInVariants}>
                            사용해보기
                        </motion.p>
                        <motion.p variants={fadeInVariants}>Go Demo</motion.p>
                    </div>
                </motion.div>
                <motion.div
                    className="readMoreWrap"
                    style={{
                        opacity: opacity3,
                    }}
                >
                    <div className="mouseWrap">
                        <div className="mouseBody">
                            <div className="mouseWheel"></div>
                        </div>
                        <div className="hint">More</div>
                    </div>
                </motion.div>
            </div>
            <motion.div className="contentSection" ref={contentSectionRef}>
                <motion.div
                    className="article introduction"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: "all" }}
                >
                    <ArticleTitle title={"Introduction"} />
                    <div className="articleContent">
                        <motion.p variants={fadeInVariants}>
                            우리의 일상 공간인 주거지역은 누구나 평온하고
                            안전하게 생활하기를 바라는 곳입니다. 하지만 때때로
                            예기치 못한 이상 행동이나 범죄로부터의 위협은 이
                            평화를 해칠 수 있습니다. 이러한 문제를 해결하기
                            위해, 우리 연구팀은 주거지역 내에서 이상 행동을
                            실시간으로 탐지하여 범죄를 사전에 예방하는 데 중점을
                            둔 이상행위 탐지 모델을 개발하였습니다.
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    className="article goal"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: "all" }}
                >
                    <ArticleTitle title={"Model's Goal"} />
                    <div className="articleContent">
                        <motion.p variants={fadeInVariants}>
                            이 모델은 CCTV와 같은 감시 장치에서 수집된 데이터를
                            기반으로, 비정상적인 행동 패턴을 식별하고
                            분석합니다. 목표는 간단합니다. 거주지역의 치안을
                            강화하고, 주민들이 더 안전한 환경에서 생활할 수
                            있도록 돕는 것입니다.
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    className="article features"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: "some" }}
                >
                    <ArticleTitle title={"Features"} />
                    <div className="articleContent">
                        <ul>
                            <motion.li variants={fadeInVariants}>
                                <strong>실시간 이상 행동 탐지</strong>: 모델은
                                CCTV 등의 감시 장치로부터 수집된 영상 데이터를
                                실시간으로 분석하여 이상 행동을 식별합니다. 이는
                                즉각적인 대응을 가능하게 하여 범죄 예방에 큰
                                역할을 합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>다양한 이상 행동의 인식</strong>: 이
                                모델은 단순한 비정상적 움직임뿐만 아니라, 폭력적
                                행동, 의심스러운 집단 모임, 장시간 정지와 같은
                                다양한 유형의 이상 행동을 인식할 수 있습니다.
                                <ul>
                                    <motion.li variants={fadeInVariants}>
                                        <strong>인식 가능 행동 목록</strong>
                                        <div className="tableGrid">
                                            {Data.action.arr.map((action) => (
                                                <div
                                                    className="cell"
                                                    key={action}
                                                >
                                                    {action}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.li>
                                    <motion.li variants={fadeInVariants}>
                                        <strong>인식 가능 징후 목록</strong>
                                        <div className="tableGrid">
                                            {Data.symptom.arr.map((action) => (
                                                <div
                                                    className="cell"
                                                    key={action}
                                                >
                                                    {action}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.li>
                                    <motion.li variants={fadeInVariants}>
                                        <strong>인식 가능 범죄 목록</strong>
                                        <div className="tableGrid">
                                            {Data.crime.arr.map((action) => (
                                                <div
                                                    className="cell"
                                                    key={action}
                                                >
                                                    {action}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.li>
                                </ul>
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>데이터 학습 및 개선</strong>: 모델은
                                지속적으로 수집되는 데이터로부터 학습하여, 탐지
                                정확도를 점차 향상시키고 새로운 유형의 이상
                                행위에도 신속하게 적응합니다.
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    className="article advantages"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: "all" }}
                >
                    <ArticleTitle title={"Advantages"} />
                    <div className="articleContent">
                        <ul>
                            <motion.li variants={fadeInVariants}>
                                <strong>즉각적인 대응 가능</strong>: 이상 행동이
                                탐지되면, 관련 당국이나 주민에게 즉시 알림을
                                보내어 신속한 대응을 가능하게 합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>범죄 예방</strong>: 이상 행동의 조기
                                발견과 즉각적인 대응은 범죄 발생 가능성을 크게
                                줄여주어, 안전한 주거 환경을 조성하는 데
                                기여합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>환경적 유연성</strong>: 다양한 환경과
                                조건에서도 효과적으로 작동할 수 있도록 설계되어,
                                날씨 변화나 조명 조건의 변화에도 높은 탐지
                                정확도를 유지합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>커뮤니티 의식 강화</strong>: 이상 행위
                                탐지 모델의 도입은 주민들 사이의 안전에 대한
                                인식을 높이고, 커뮤니티 의식을 강화하는 효과를
                                가져옵니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>경제적 비용 절감</strong>: 범죄로 인한
                                경제적 손실과 치안 유지를 위한 비용을 절감할 수
                                있으며, 장기적으로 사회적 비용 절감에도
                                기여합니다.
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    className="article structure"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: "all" }}
                >
                    <ArticleTitle title={"Structure"} />
                    <div className="articleContent">
                        <motion.img
                            src={Model_1_Structure}
                            alt="Model 1 Structure"
                            variants={fadeInVariants}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const ModelRoBustPage = () => {
    return (
        <div id="model2Page" className="page">
            <div className="titleSection"></div>
            <div className="contentSection"></div>
        </div>
    );
};

const ModelQNAPage = () => {
    return (
        <div id="model3Page" className="page">
            <div className="titleSection"></div>
            <div className="contentSection"></div>
        </div>
    );
};

const ArticleTitle = ({ title }) => {
    return (
        <motion.div className="articleTitle" variants={fadeInVariants}>
            {title}
        </motion.div>
    );
};
ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export { ModelNiaPage, ModelRoBustPage, ModelQNAPage };
