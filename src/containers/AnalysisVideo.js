import { useState } from "react";
import axios from "../apis/axios";
import IntervalTime from "./IntervalTime";
import { PropTypes } from "prop-types";

const baseURL = process.env.REACT_APP_SERVER_MODULE_I;
const AnalysisVideo = ({ video }) => {
    const [result, setResult] = useState("");
    const [processStatus, setProcessStatus] = useState(false);
    const [time, setTime] = useState(0);

    const handleVideoAnalysis = () => {
        const params = { videoId: video.id };
        setProcessStatus(true);
        axios
            .get(baseURL + "/service/analysis-video", { params })
            .then((res) => {
                setProcessStatus(false);
                const { data } = res;
                console.log(data);
                setResult(data);
            })
            .catch((e) => {
                console.log("GET VIDEO LIST", e);
            });
    };

    return (
        <div>
            <video width="320" height="240" className="video-item" controls>
                <source
                    src={baseURL + "/static/" + video.path}
                    type="video/mp4"
                />
            </video>
            <div>
                <button
                    onClick={() => handleVideoAnalysis()}
                    disabled={processStatus}
                >
                    {" "}
                    동영상 분석
                </button>
                {time !== 0 && <span>{time}초</span>}
                {processStatus && <IntervalTime setTime={(e) => setTime(e)} />}
                {processStatus && (
                    <div>
                        <p>처리 중...</p>
                    </div>
                )}
                {result && (
                    <div style={{ marginTop: "10px" }}>
                        <p>분석 결과</p>
                        <textarea
                            style={{
                                width: "320px",
                                height: "250px",
                                marginTop: "10px",
                            }}
                            readOnly
                            value={result}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
AnalysisVideo.propTypes = {
    video: {
        id: PropTypes.string.isRequired,
    },
};

export default AnalysisVideo;
