// 라이브러리
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
// 서비스
import NiaService from "@/services/niaService";
// 컴포넌트
// 아이콘
import {
    ChevronLeft,
    ChevronRight,
    Play,
    ScanSearch,
    X,
    Loader,
} from "lucide-react";
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

const DemoNiaPage = () => {
    const [videoList, setVideoList] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isPopUp, setIsPopUp] = useState(false);
    const [isProcess, setIsProcess] = useState(false);
    const [labeled, setLabeled] = useState("");
    const [detected, setDetected] = useState("");
    const [top5, setTop5] = useState([]);
    const [result, setResult] = useState("");
    const checkServer = async () => {
        const response = await NiaService.serverCheck();
        if (response) {
            console.log("[NIA SERVER] Server Is Working");
        } else {
            console.log("[NIA SERVER ERROR] Server Is Not Working");
            window.alert("서버에 연결할 수 없습니다.");
        }
    };
    const getVideoList = async () => {
        const response = await NiaService.getVideoList();
        setVideoList(response);
    };
    const getAnalysisVideo = async (video) => {
        processHandler(true);
        const response = await NiaService.getAnalysisVideo(video);
        resultPopUpHandler("open", response.data);
        processHandler(false);
    };
    const resultHandler = (result) => {
        const results = result.split("\n");
        if (results.length !== 0) {
            let l = results[10].split(":")[1].split("]")[0].trim();
            let d = results[11].split(":")[1].split("[")[0].trim();
            let t = results.slice(-6, -1);
            let t5 = [{}];
            for (let i = 0; i < 5; i++) {
                let temp = [];
                if (t[i].includes("m")) {
                    temp = t[i].trim().split("m")[1].split("%")[0].split(":");
                } else {
                    temp = t[i].split("%")[0].split(":");
                }
                temp = [temp[0].trim(), temp[1].trim()];
                t[i] = { name: temp[0], value: parseFloat(temp[1]) };
            }
            setLabeled(l);
            setDetected(d);
            setTop5(t);
        }
    };
    const videoContainerHandler = (idx) => {
        const target = document.querySelector(".videoContainer");
        target.style.transform = `translateX(${-idx * 100}svw)`;
    };
    const processHandler = (type) => {
        const progress = document.querySelector(".analysisProgress");
        const articles = document.querySelectorAll(".article");
        const article = articles[currentIdx];
        const videos = document.querySelectorAll(".backgroundVideo");
        const video = videos[currentIdx];
        if (type) {
            video.style.opacity = 1;
            progress.style.bottom = "10%";
            article.style.opacity = 0;
            video.play();
            setIsProcess(true);
        } else {
            video.style.opacity = 0.5;
            progress.style.bottom = "-4rem";
            article.style.opacity = 1;
            video.pause();
            setIsProcess(false);
        }
    };
    const videoPopUpHandler = (type) => {
        const target = document.querySelector(".videoPopUp");
        if (type === "open") {
            setIsPopUp(true);
        } else {
            target.style.animation = "fadeOut 1s forwards";
            setTimeout(() => {
                setIsPopUp(false);
            }, 1000);
        }
    };
    const resultPopUpHandler = (type, result) => {
        const target = document.querySelector(".resultPopUp");
        if (type === "open") {
            setResult(result);
            resultHandler(result);
        } else {
            target.style.animation = "fadeOut 1s forwards";
            setTimeout(() => {
                setResult("");
            }, 1000);
        }
    };
    useEffect(() => {
        useTheme("black");
        checkServer();
        getVideoList();
    }, []);
    useEffect(() => {
        videoContainerHandler(currentIdx);
    }, [currentIdx]);
    return (
        <div id="demoNiaPage" className="page">
            <div className="videoContainer">
                {videoList.map((video, idx) => (
                    <div className="videoWrap" key={idx}>
                        <video
                            className="backgroundVideo"
                            type="video/mp4"
                            src={`${NiaService.url}/static/${video.path}`}
                            muted
                            loop
                            controls={false}
                            playsInline
                        />
                        <div className="article">
                            <motion.div
                                className="mainTypo"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{
                                    once: false,
                                }}
                                variants={typoVariants}
                            >
                                Test Video #{idx + 1}
                            </motion.div>
                            <div className="funcWrap">
                                <motion.button
                                    className="funcBtn"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{
                                        once: false,
                                    }}
                                    variants={btnVariants}
                                    onClick={() => {
                                        videoPopUpHandler("open");
                                    }}
                                >
                                    <p>동영상 보기</p>
                                    <p>
                                        <Play className="w-6 h-6 text-white" />
                                    </p>
                                </motion.button>
                                <motion.button
                                    className="funcBtn"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{
                                        once: false,
                                    }}
                                    variants={btnVariants}
                                    style={{
                                        cursor: `${
                                            isProcess ? "progress" : "pointer"
                                        }`,
                                    }}
                                    onClick={() => {
                                        if (!isProcess) {
                                            getAnalysisVideo(video);
                                        }
                                    }}
                                >
                                    <p>동영상 분석</p>
                                    <p>
                                        <ScanSearch className="w-6 h-6 text-white" />
                                    </p>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {currentIdx !== 0 && (
                <div
                    className="videoControl prev"
                    onClick={() => {
                        if (!isProcess) {
                            setCurrentIdx(currentIdx - 1);
                        }
                    }}
                    style={{
                        cursor: `${isProcess ? "not-allowed" : "pointer"}`,
                    }}
                >
                    <ChevronLeft className="w-10 h-10" />
                </div>
            )}
            {currentIdx !== videoList.length - 1 && (
                <div
                    className="videoControl next"
                    onClick={() => {
                        if (!isProcess) {
                            setCurrentIdx(currentIdx + 1);
                        }
                    }}
                    style={{
                        cursor: `${isProcess ? "not-allowed" : "pointer"}`,
                    }}
                >
                    <ChevronRight className="w-10 h-10" />
                </div>
            )}
            {isPopUp && (
                <div
                    className="popUp videoPopUp"
                    onClick={() => {
                        videoPopUpHandler("close");
                    }}
                >
                    <video
                        type="video/mp4"
                        src={`${NiaService.url}/static/${videoList[currentIdx].path}`}
                        controls
                        playsInline
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <button
                        className="closeBtn"
                        onClick={(e) => {
                            e.stopPropagation();
                            videoPopUpHandler("close");
                        }}
                    >
                        <p>닫기</p>
                        <p>
                            <X className="w-6 h-6 text-white" />
                        </p>
                    </button>
                </div>
            )}
            {result !== "" && (
                <div
                    className="popUp resultPopUp"
                    onClick={() => {
                        resultPopUpHandler("close");
                    }}
                >
                    <div
                        className="resultWrap"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="mainTypo">Result</div>
                        <div className="summaryWrap">
                            <div className="labledResultWrap">
                                <p>실제 행동</p>
                                <p>{labeled}</p>
                            </div>
                            <div className="detectResultWrap">
                                <p>모델이 예측한 행동</p>
                                <p>{detected}</p>
                            </div>
                        </div>
                        <div className="top5Wrap">
                            <div className="barWrap">
                                {top5.map((data, idx) => (
                                    <div
                                        className="bar"
                                        key={`bar${idx}`}
                                        style={{ flex: `${data.value}` }}
                                    ></div>
                                ))}
                            </div>
                            <div className="listWrap">
                                {top5.map((data, idx) => (
                                    <div className="label" key={`label${idx}`}>
                                        <span className="colorTip"></span>
                                        <div className="key">{data.name}</div>
                                        <div className="value">
                                            {data.value}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <textarea className="logWrap" rows={5}>
                            {result}
                        </textarea> */}
                    </div>
                    <button
                        className="closeBtn"
                        onClick={(e) => {
                            e.stopPropagation();
                            resultPopUpHandler("close");
                        }}
                    >
                        <p>닫기</p>
                        <p>
                            <X className="w-6 h-6 text-white" />
                        </p>
                    </button>
                </div>
            )}
            <div className="analysisProgress">
                <span>동영상 분석중</span>
                <Loader className="w-4 h-4 text-black" />
            </div>
        </div>
    );
};

export default DemoNiaPage;
