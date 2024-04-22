import axios from "axios";

const NIA_SERVER_URL = "http://210.94.194.83:3003";
const serverCheck = async () => {
    try {
        const response = await axios.get(NIA_SERVER_URL);
        return response.status === 200;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const getVideoList = async () => {
    try {
        const response = await axios.get(
            NIA_SERVER_URL + "/service/video-list"
        );
        if (response.status === 200) {
            return response.data.data.videos;
        } else {
            console.log(`[AXIOS REQUEST ERROR] : ${response}`);
        }
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const getAnalysisVideo = async (video) => {
    try {
        const params = { videoId: video.id };
        console.log("[NIA SERVICE] Video Analysis Start");
        const response = await axios.get(
            NIA_SERVER_URL + "/service/analysis-video",
            { params }
        );
        console.log("[NIA SERVICE] Video Analysis Finish");
        console.log("[NIA SERVICE] Response :", response);
        console.log("[NIA SERVICE] ResponseData :", response.data);
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(`[AXIOS REQUEST ERROR] : ${response}`);
        }
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const NiaService = {
    url: NIA_SERVER_URL,
    serverCheck,
    getVideoList,
    getAnalysisVideo,
};

export default NiaService;
