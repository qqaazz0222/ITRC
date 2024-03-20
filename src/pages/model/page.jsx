// 라이브러리
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
// 서비스
// 컴포넌트
// 아이콘
// 이미지
import Model_NIA_Structure from "@/assets/images/nia.png";
import Model_QNA_Structure from "@/assets/images/qna.png";
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
        <div id="modelNiaPage" className="page modelPage">
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
                            src={Model_NIA_Structure}
                            alt="Model 1 Structure"
                            variants={fadeInVariants}
                        />
                        <ol>
                            <motion.li variants={fadeInVariants}>
                                <strong>입력</strong> : 영상 및 스켈레톤
                                데이터을 전달한다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>프레임단위로 이미지 저장</strong> :
                                동영상 데이터를 입력으로 받아 프레임단위로
                                이미지로 저장한다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>모델별 이상행동 예측</strong> : 저장한
                                이미지를 C3D, CNN-RNN을 통하여 이상행동을
                                예측하여 해당 이상행동의 라벨값으로 반환한다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>모델별 예측 결과 입력</strong> : C3D의
                                예측 결과값과 CNN_RNN의 예측 결과값그리고 실제
                                값을 입력으로 받는다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>최종 예측 결과 제공</strong> : C3D ,
                                CNN_RNN의 예측 결과값 및 실제 값을 입력으로
                                받음으로써 최종적으로 해당 데이터(영상,JSON)의
                                최종적으로 예측한 이상행동 결과 값을 반환한다.
                            </motion.li>
                        </ol>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const ModelRoBustPage = () => {
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
        <div id="modelRoBustPage" className="page modelPage">
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
                            src={Model_QNA_Structure}
                            alt="Model QNA Structure"
                            variants={fadeInVariants}
                        />
                        <ol>
                            <motion.li variants={fadeInVariants}>
                                <strong>입력</strong> : 영상 및 스켈레톤
                                데이터을 전달한다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>프레임단위로 이미지 저장</strong> :
                                동영상 데이터를 입력으로 받아 프레임단위로
                                이미지로 저장한다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>모델별 이상행동 예측</strong> : 저장한
                                이미지를 C3D, CNN-RNN을 통하여 이상행동을
                                예측하여 해당 이상행동의 라벨값으로 반환한다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>모델별 예측 결과 입력</strong> : C3D의
                                예측 결과값과 CNN_RNN의 예측 결과값그리고 실제
                                값을 입력으로 받는다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>최종 예측 결과 제공</strong> : C3D ,
                                CNN_RNN의 예측 결과값 및 실제 값을 입력으로
                                받음으로써 최종적으로 해당 데이터(영상,JSON)의
                                최종적으로 예측한 이상행동 결과 값을 반환한다.
                            </motion.li>
                        </ol>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const ModelQNAPage = () => {
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
        <div id="modelQnaPage" className="page modelPage">
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
                            Project : Q&A
                        </motion.p>
                    </div>
                    <div className="subTypo">
                        <motion.p variants={fadeInVariants}>
                            Question & Answer
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
                            이 인공지능 모델은 DistilBert를 기반으로 한 RobustQA
                            모델입니다.일상생활에서 정보의 필요성은 점점 더
                            커지고 있습니다. 우리는 매일 수많은 질문과 결정에
                            직면하며, 이를 위해 정확하고 신속한 정보의 접근이
                            필수적입니다. 예를 들어, 요리를 하면서 특정 재료의
                            대체품을 찾아야 할 때, 건강 관련 정보를 신속하게
                            알고 싶을 때, 혹은 새로운 기술이나 주제에 대한 깊이
                            있는 이해가 필요할 때 등 우리의 일상은 끊임없이
                            정보를 찾고 이해하는 과정으로 이루어져 있습니다.
                        </motion.p>
                        <motion.p variants={fadeInVariants}>
                            이러한 정보의 바다에서 원하는 정보를 찾는 것은 종종
                            시간 소모적이고 어려운 일입니다. 특히, 긴 문서나
                            기사, 논문 등에서 특정 정보를 찾아내려 할 때, 전체
                            내용을 일일이 읽어보지 않고서는 원하는 답을 얻기
                            어렵습니다. 이런 상황에서 우리의 RobustQA 모델은
                            사용자가 간단한 질문을 통해 필요한 정보를 즉시 찾을
                            수 있도록 도와줍니다. 이를 통해 정보 검색에 소요되는
                            시간을 대폭 줄이고, 정보의 질을 향상시킬 수
                            있습니다.
                        </motion.p>
                        <motion.p variants={fadeInVariants}>
                            또한, 가상비서 시스템을 통해 일상적인 질문에 대한
                            답변을 제공하거나, 사용자의 요구에 맞는 정보를
                            제공함으로써 일상 생활의 편의성을 증대시키는 역할도
                            할 수 있습니다. 예를 들어, 날씨 정보, 일정 관리,
                            실시간 뉴스 업데이트 등 사용자가 필요로 하는 다양한
                            정보를 제공받음으로써 더욱 효율적이고 편리한 생활이
                            가능해집니다.
                        </motion.p>
                        <motion.p variants={fadeInVariants}>
                            이처럼, RobustQA 모델은 일상생활 속에서 사용자가
                            직면하는 다양한 정보의 필요에 신속하고 정확하게
                            대응할 수 있는 강력한 도구입니다. 정보의 접근성을
                            향상시키고, 시간과 노력을 절약할 수 있도록 도와주며,
                            결국 사용자의 삶의 질을 한 단계 끌어올리는 데
                            기여합니다.
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
                            이 모델의 주요 목표는 사용자의 질문에 대해 정확하고
                            신속한 답변을 제공하는 것입니다. 이를 통해 정보
                            검색의 효율성을 극대화하고, 사용자의 시간과 노력을
                            절약할 수 있게 합니다. 또한, 복잡하고 다양한 데이터
                            속에서도 정확한 답변을 추출해내는 능력을 갖추어,
                            사용자 경험을 향상시키는 것을 목표로 합니다.
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
                                <strong>전체 문장 입력</strong>: 사용자는
                                확인하고자 하는 전체 문장을 입력합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>질의 내용 입력</strong>:사용자는 전체
                                문장에서 확인하고자 하는 질의 내용을 입력합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>토큰화 및 임베딩 생성</strong>: 입력받은
                                문장과 질의 내용을 토큰화하고, 이를 바탕으로
                                단어나 문장의 임베딩을 생성합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>문맥 파악</strong>: Transformer 기술을
                                사용하여 입력된 문장과 질의의 문맥을 파악합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>답변 생성</strong>: 문맥 파악 단계를
                                통해 추출된 정보와 분석 결과를 기반으로 정확한
                                답변을 생성합니다.
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
                                <strong>높은 정확도</strong>: DistilBert와
                                Transformer 기술을 결합하여 높은 정확도의 답변을
                                제공합니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>다양한 활용 가능성</strong>: 자동
                                질의응답, 가상비서, 검색 엔진 등 다양한 분야에서
                                폭넓게 활용할 수 있습니다.
                            </motion.li>
                            <motion.li variants={fadeInVariants}>
                                <strong>사용자 친화적</strong>: 긴 문장 속에서도
                                사용자가 원하는 정보를 쉽고 빠르게 찾을 수
                                있도록 설계되었습니다.
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
                            src={Model_QNA_Structure}
                            alt="Model QNA Structure"
                            variants={fadeInVariants}
                        />
                    </div>
                </motion.div>
            </motion.div>
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
