import axios from "axios";

const SERVER_URL = "http://210.94.194.83:5050";

const niaServerCheck = async () => {
    try {
        const response = await axios.get(SERVER_URL + "/nia");
        return response.status === 200;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const niaGetVideoList = async () => {
    try {
        const response = await axios.get(SERVER_URL + "/nia/video-list");
        return response.data;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};
const niaGetAnalysisVideo = async (vid) => {
    try {
        const response = await axios.get(
            SERVER_URL + `/nia/analysis-video?vid=${vid}`
        );
        return response.data;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const robustqaServerCheck = async () => {
    try {
        const response = await axios.get(SERVER_URL + "/robustqa");
        return response.status === 200;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const robustqaPostAnalysisQuestion = async (context, question) => {
    try {
        const response = await axios.post(SERVER_URL + "/robustqa/analysis", {
            context: context,
            question: question,
        });
        return response.data;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const ModuleService = {
    url: SERVER_URL,
    niaServerCheck,
    niaGetVideoList,
    niaGetAnalysisVideo,
    robustqaServerCheck,
    robustqaPostAnalysisQuestion,
};

export default ModuleService;
