// 라이브러리
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { PropTypes } from "prop-types";
import useTheme from "@/hooks/useTheme";
// 서비스
// 컴포넌트
// 아이콘
// 이미지
import ModelPoster from "@/assets/videos/model-poster.png";
// 동영상
import Model from "@/assets/videos/model.webm";
// 스타일
import "./style.css";
// 데이터
import { niaData, robustQaData, deepScanData } from "./data";

const projects = {
    nia: niaData,
    robustqa: robustQaData,
    deepscan: deepScanData,
};

const fadeInVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.2,
        },
    },
};
const ModelPage = ({ project }) => {
    const { pageOutHandler } = useOutletContext();
    const themeHandler = useTheme;
    const data = projects[project];
    const [videoKey, setVideoKey] = useState("pause");

    const videoRef = useRef(null);
    const [contentSectionRef, contentSectionInView] = useInView();
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
        setVideoKey("play");
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
                <motion.div
                    className="videoWrap"
                    style={{
                        opacity: opacity1,
                        scale: scale1,
                        top: top1,
                    }}
                >
                    <video
                        id="bgVideo"
                        poster={ModelPoster}
                        muted
                        autoPlay
                        loop
                        playsInline
                        key={videoKey}
                    >
                        <source src={Model} type="video/webm" />
                    </video>
                </motion.div>
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
                            Project : {data.project}
                        </motion.p>
                    </div>
                    <div className="subTypo">
                        <motion.p variants={fadeInVariants}>
                            {data.desc}
                        </motion.p>
                    </div>
                    <div className="tags">
                        {data.tags.map((tag, idx) => (
                            <div className="tag" key={`tag${idx}`}>
                                #{tag}
                            </div>
                        ))}
                    </div>
                    <div
                        className="tryOutBtn"
                        onClick={() => {
                            pageOutHandler(data.demo);
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
                <div className="article introduction">
                    <ArticleTitle title={"Introduction"} />
                    <ArticleContentTypo text={data.introduction} />
                </div>
                <div className="article goal">
                    <ArticleTitle title={"Model's Goal"} />
                    <ArticleContentTypo text={data.goal} />
                </div>
                <div className="article features">
                    <ArticleTitle title={"Features"} />
                    <div className="articleContent">
                        <ul>
                            {data.features.map((feature, idx) => (
                                <>
                                    {feature.desc ? (
                                        <ArticleContentListItem
                                            title={feature.title}
                                            desc={feature.desc}
                                            key={idx}
                                        />
                                    ) : (
                                        <ArticleContentTable
                                            title={feature.title}
                                            items={feature.cells}
                                            key={idx}
                                        />
                                    )}
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
                <motion.div className="article advantages">
                    <ArticleTitle title={"Advantages"} />
                    <div className="articleContent">
                        <ul>
                            {data.advantages.map((adventage, idx) => (
                                <ArticleContentListItem
                                    title={adventage.title}
                                    desc={adventage.desc}
                                    key={idx}
                                />
                            ))}
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
                        <ArticleContentImage img={data.structure.image} />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
ModelPage.propTypes = {
    project: PropTypes.string.isRequired,
};

const ArticleTitle = ({ title }) => {
    return (
        <motion.div
            className="articleContent"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: "all" }}
        >
            <motion.div className="articleTitle" variants={fadeInVariants}>
                {title}
            </motion.div>
        </motion.div>
    );
};
ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

const ArticleContentTypo = ({ text }) => {
    return (
        <motion.div
            className="articleContent"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: "all" }}
        >
            <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: "all" }}
                variants={fadeInVariants}
            >
                {text}
            </motion.p>
        </motion.div>
    );
};
ArticleContentTypo.propTypes = {
    text: PropTypes.string.isRequired,
};

const ArticleContentListItem = ({ title, desc }) => {
    return (
        <motion.li
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: "some" }}
        >
            <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: "some" }}
                variants={fadeInVariants}
            >
                <strong>{title}</strong> : {desc}
            </motion.p>
        </motion.li>
    );
};
ArticleContentListItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};
const ArticleContentTable = ({ title, items }) => {
    return (
        <motion.li
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: "some" }}
            variants={fadeInVariants}
        >
            <strong>{title}</strong>
            <div className="tableGrid">
                {items.map((item) => (
                    <div className="cell" key={item}>
                        {item}
                    </div>
                ))}
            </div>
        </motion.li>
    );
};
ArticleContentTable.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

const ArticleContentImage = ({ img }) => {
    return (
        <motion.img
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: "some" }}
            variants={fadeInVariants}
            src={img}
        ></motion.img>
    );
};
ArticleContentImage.propTypes = {
    img: PropTypes.string.isRequired,
};

export default ModelPage;
