// 라이브러리
import { useEffect, useState } from "react";
// 서비스
import NiaService from "@/services/niaService";
// 컴포넌트
// 아이콘
// 스타일

const DemoNiaPage = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [videoList, setVideoList] = useState([]);
    const [result, setResult] = useState("");
    const checkServer = async () => {
        const response = await NiaService.serverCheck();
        if (response) {
            console.log("[NIA SERVER] Server Is Working");
        } else {
            console.log("[NIA SERVER ERROR] Server Is Not Working");
            window.alert("서버가 연결할 수 없습니다.");
        }
    };
    const getVideoList = async () => {
        const response = await NiaService.getVideoList();
        setVideoList(response);
    };
    const getAnalysisVideo = async (video) => {
        const response = await NiaService.getAnalysisVideo(video);
        setResult(response);
    };
    useEffect(() => {
        checkServer();
        getVideoList();
    }, []);
    useEffect(() => {
        console.log(videoList);
    }, [videoList]);
    return (
        <div id="demoNiaPage" className="page">
            <div className="videoContainer">
                {videoList.map((video, idx) => (
                    <>
                        <video
                            type="video/mp4"
                            src={`${NiaService.url}/static/${video.path}`}
                            key={idx}
                            controls
                        />
                        <button
                            onClick={() => {
                                getAnalysisVideo(video);
                            }}
                        >
                            분석
                        </button>
                    </>
                ))}
            </div>
        </div>
    );
};

const DemoRoBustPage = () => {
    return <div id="demoNiaPage" className="page"></div>;
};
const DemoQNAPage = () => {
    return <div id="demoNiaPage" className="page"></div>;
};

export { DemoNiaPage, DemoRoBustPage, DemoQNAPage };
