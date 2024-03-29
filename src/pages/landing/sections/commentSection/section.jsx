// 라이브러리
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
// 서비스
import CommentService from "@/services/commentService";
// 컴포넌트
// 이미지
// 아이콘
// 스타일
import "./style.css";

const commentVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.5,
        },
    },
};

const CommentSection = ({ state, onReload }) => {
    const [nickName, setNickName] = useState("");
    const [context, setContext] = useState("");
    const initComment = () => {
        setNickName("");
        setContext("");
    };
    const createComment = async () => {
        const response = await CommentService.createComment(nickName, context);
        console.log(response);
        initComment();
        onReload();
    };
    return (
        <div id="commentSection" className="section">
            <div className="article">
                <div className="mainTypo">Comment</div>
                <div className="commentInput">
                    <input
                        className="inputNickname"
                        type="text"
                        placeholder="닉네임을 입력하세요"
                        value={nickName}
                        onChange={(e) => {
                            setNickName(e.target.value);
                        }}
                    />
                    <textarea
                        className="inputContext"
                        cols="auto"
                        rows="5"
                        placeholder="체험후기, 응원말 등 무엇이든 편하게 작성해주세요"
                        value={context}
                        onChange={(e) => {
                            setContext(e.target.value);
                        }}
                    ></textarea>
                    <div className="controlWrap">
                        <div className="hint">
                            <p>
                                *욕설 또는 비방글은 안내없이 삭제될 수 있습니다.
                            </p>
                        </div>
                        <button
                            className="initBtn"
                            onClick={() => {
                                initComment();
                            }}
                        >
                            초기화
                        </button>
                        <button
                            className="sendBtn"
                            onClick={() => {
                                createComment();
                            }}
                        >
                            작성
                        </button>
                    </div>
                </div>
                <div className="commentContainer">
                    {state.map((comment, idx) => (
                        <Comment data={comment} key={`{comment${idx + 1}}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};
CommentSection.propTypes = {
    state: PropTypes.array.isRequired,
    onReload: PropTypes.func.isRequired,
};

const Comment = ({ data }) => {
    return (
        <motion.div
            className="comment"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{
                once: true,
            }}
            variants={commentVariants}
        >
            <div className="context">{data.context}</div>
            <div className="infoWrap">
                <div className="nickName">{data.nickname}</div>
                <div className="created">{data.created.slice(0, -3)} 작성</div>
            </div>
        </motion.div>
    );
};
Comment.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CommentSection;
