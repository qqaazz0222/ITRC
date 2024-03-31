import axios from "axios";

const COMMENT_SERVER_URL = "http://192.168.196.7:3000";
const serverCheck = async () => {
    try {
        const response = await axios.get(COMMENT_SERVER_URL);
        return response.status === 200;
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const getCommentAll = async () => {
    try {
        const response = await axios.get(
            COMMENT_SERVER_URL + "/comment/latest/all"
        );
        if (response.status === 200) {
            console.log(response);
            return response.data[0];
        } else {
            console.log(`[AXIOS REQUEST ERROR] : ${response}`);
        }
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const createComment = async (nickname, context) => {
    try {
        const response = await axios.post(
            COMMENT_SERVER_URL + "/comment/create",
            { nickname: nickname, context: context }
        );
        if (response.status === 200) {
            console.log(response);
            return response.data[0];
        } else {
            console.log(`[AXIOS REQUEST ERROR] : ${response}`);
        }
    } catch (error) {
        console.log(`[AXIOS ERROR] : ${error}`);
    }
};

const CommentService = {
    url: COMMENT_SERVER_URL,
    serverCheck,
    getCommentAll,
    createComment,
};

export default CommentService;
