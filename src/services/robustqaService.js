import axios from "axios";
import NullCheck from "@/utils/nullCheck";

const ROBUSTQA_SERVER_URL = "http://210.94.194.83:3002";
const serverCheck = async () => {
    try {
        const response = await axios.get(ROBUSTQA_SERVER_URL);
        return response.status === 200;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const postAnalysisQuestion = async (context, question) => {
    try {
        if (NullCheck(context) && NullCheck(question)) {
            const response = await axios.post(
                ROBUSTQA_SERVER_URL + "/service/analysis",
                { context: context, question: question }
            );
            if (response.status === 200) {
                return response.data;
            } else {
                console.log(`[AXIOS REQUEST ERROR] : ${response}`);
            }
        } else {
            console.error(
                "[robustService.postAnalysisQuestion] 유효하지 않은 context, question 값"
            );
        }
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const RobustqaService = {
    url: ROBUSTQA_SERVER_URL,
    serverCheck,
    postAnalysisQuestion,
};

export default RobustqaService;
