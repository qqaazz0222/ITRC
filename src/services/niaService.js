import axios from "axios";

const NIA_SERVER_URL = "http://210.94.194.83:5001";
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
        const response = await axios.get(
            NIA_SERVER_URL + "/service/analysis-video",
            { params }
        );
        console.log(response);
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
