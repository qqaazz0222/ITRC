import React, { useEffect, useState } from "react";
import axios from "../apis/axios";
import socket from "socket.io-client";
import { contents } from "./contents";
import Images from "./imageList";
import IntervalTime from "./IntervalTime";

const baseURL = process.env.REACT_APP_SERVER_MODULE_II;
const socketIO = socket.connect(process.env.REACT_APP_SERVER_MODULE_II);
export default function ModuleII() {
    const [action, setAction] = useState("");
    const [context, setContext] = useState(
        "Stephen Silvagni (born 31 May 1967) is a former Australian rules footballer for the Carlton Football Club."
    );
    const [question, setQuestion] = useState(
        `What was the name of Stephen Silvagni's team?`
    );
    const [returnContent, setReturnContent] = useState("");
    const [trainingLog, setTrainingLog] = useState("");
    const [processStatus, setProcessStatus] = useState(false);
    const moduleContent = contents.filter(
        (item) => item.name === "module_2"
    )[0];
    const [time, setTime] = useState(0);

    const handleTraining = () => {
        if (!socketIO.connected) {
            alert("Socket 서버 연결 실패, 서버 다시 확인해주세요.");
            return;
        }
        handleSetAction("training");

        setTimeout(() => {
            socketIO.emit("training", () => {});
        }, 2000);
        socketIO.on("log", (data) => {
            setTrainingLog(data);
        });
        setProcessStatus(true);
        axios
            .get(baseURL + "/service/training")
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log("GET VIDEO LIST", e);
            });
    };

    const handleProccess = () => {
        const params = { context, question };
        setProcessStatus(true);
        setTime(0);
        axios
            .get(baseURL + "/service/analysis", { params })
            .then((res) => {
                const { data } = res;
                setProcessStatus(false);
                console.log(res);
                setReturnContent(data);
            })
            .catch(() => {
                alert("Error upload file");
            });
    };

    const handleSetAction = (value) => {
        if (value === action) {
            setAction("");
            return;
        }
        setAction(value);
    };

    return (
        <div className="module-item">
            <div>
                <h2>Question & Answer 모델</h2>
            </div>
            <div className="module-item__intro">
                <h3>1. 소개</h3>
                <p>{moduleContent.introduction[0]}</p>
            </div>
            <div className="module-item__arch">
                <h3>2. 모델 아키텍처</h3>
                <ol className="module-item__arch-list">
                    <li>{moduleContent.architecture[0]}</li>
                    <li>{moduleContent.architecture[1]}</li>
                    <li>{moduleContent.architecture[2]}</li>
                    <li>{moduleContent.architecture[3]}</li>
                    <li>{moduleContent.architecture[4]}</li>
                </ol>
                <div className="module-item__arch-image">
                    <img src={Images.robustQA} />
                    <p>딥러닝 기반 QA 모델 아키텍처</p>
                </div>
            </div>
            <div className="module-item__lib">
                <h3>3. 사용 라이브러리 및 패키지</h3>
                <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
                    <li>
                        pytorch, numpy, tqdm, transformers, tensorboard,
                        tensorflow, tensorboardX
                    </li>
                </ol>
            </div>
            <div className="module-item__examp">
                <h3>4. 실행 예제</h3>
                <button onClick={() => handleSetAction("process")}>실행</button>
                <button onClick={() => handleTraining()}>학습</button>
                {action === "process" && (
                    <div style={{ marginTop: "10px" }}>
                        <p>문장과 질문을 입력하세요.</p>
                        <div>
                            <div className="input-item">
                                <label>문장</label>
                                <textarea
                                    value={context}
                                    onChange={(e) => setContext(e.target.value)}
                                />
                            </div>
                            <div className="input-item">
                                <label>질문</label>
                                <input
                                    value={question}
                                    onChange={(e) =>
                                        setQuestion(e.target.value)
                                    }
                                />
                            </div>
                            <div className="analysis-result">
                                <div
                                    style={{
                                        display: "flex",
                                        textAlign: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div>
                                        {time !== 0 && <span>{time}초</span>}
                                        {processStatus && (
                                            <IntervalTime
                                                setTime={(e) => setTime(e)}
                                            />
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleProccess()}
                                        disabled={processStatus}
                                    >
                                        분석
                                    </button>
                                </div>
                                <textarea value={returnContent} readOnly />
                            </div>
                        </div>
                    </div>
                )}
                {action === "training" && (
                    <div className="training-result">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p style={{ marginLeft: "5px" }}>학습 중...</p>
                            {time !== 0 && <span>{time}초</span>}
                            {processStatus && (
                                <IntervalTime setTime={(e) => setTime(e)} />
                            )}
                        </div>
                        <textarea value={trainingLog} />
                    </div>
                )}
            </div>
        </div>
    );
}
