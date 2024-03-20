import React, { useEffect, useState } from "react";
import axios from "../apis/axios";
import socket from "socket.io-client";
import AnalysisVideo from "./AnalysisVideo";
import { contents } from "./contents";
import Images from "./imageList";

const baseURL = process.env.REACT_APP_SERVER_MODULE_I;
export default function ModuleI() {
    const [returnContent, setReturnContent] = useState("");
    // const [statusUpload, setStatusUpload] = useState(false)
    const [videoList, setVideoList] = useState([]);
    const [action, setAction] = useState("");
    const moduleContent = contents.filter(
        (item) => item.name === "module_1"
    )[0];

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(baseURL + "/service/video-list")
                .then((res) => {
                    console.log(res);
                    const { data } = res;
                    const { videos } = data;
                    setVideoList(videos);
                })
                .catch((e) => {
                    console.log("GET VIDEO LIST", e);
                });
        };
        fetchData();
    }, []);

    const handleSetAction = () => {
        if (action === "process") {
            setAction("");
        } else {
            setAction("process");
        }
    };

    return (
        <div className="module-item">
            <div>
                <h2>이상행위 탐지 모델</h2>
            </div>
            <div className="module-item__intro">
                <h3>1. 소개</h3>
                <p>{moduleContent.introduction[0]}</p>
                <p>{moduleContent.introduction[1]}</p>
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
                    <img src={Images.nia} />
                    <p>이상행위 탐지 모델 아키텍처</p>
                </div>
            </div>
            <div className="module-item__lib">
                <h3>3. 사용 라이브러리 및 패키지</h3>
                <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
                    <li>
                        keras, matplotlib, numpy, opencv, tensorflow, pandas,
                        scikit-learn, Pillow, imageio, joblib, pickle, imutils
                    </li>
                </ol>
            </div>
            <div className="module-item__examp">
                <h3>4. 실행 예제</h3>
                <div>
                    {/* <button onClick={() => handleProccess()}>실행</button> */}
                    <button onClick={() => handleSetAction()}>실행</button>
                </div>
                {action === "process" && (
                    <div style={{ marginTop: "10px" }}>
                        <p>
                            해당 모듈을 실행하기 위해서 동영상 분석 버튼을
                            클릭해주세요.
                        </p>
                        <div className="video-list">
                            {videoList.length !== 0 &&
                                videoList.map((video, index) => (
                                    <AnalysisVideo video={video} />
                                ))}
                        </div>
                        {/* {statusUpload && <span>Processing</span>} */}
                    </div>
                )}
                <div>
                    {returnContent && (
                        <textarea
                            style={{ width: "50%" }}
                            readOnly
                            value={returnContent}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
