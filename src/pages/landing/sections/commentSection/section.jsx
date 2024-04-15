// 라이브러리
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
// 서비스
import CommentService from "@/services/commentService";
// 컴포넌트
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
// 이미지
// 아이콘
import { Plus } from "lucide-react";
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
    return (
        <div id="commentSection" className="section">
            <div className="article">
                <div className="mainTypo">Comment</div>
                <div className="commentContainer">
                    <CommentInput onReload={onReload} />
                    {state.map((comment, idx) => (
                        <>
                            {comment.block === 0 && (
                                <Comment
                                    data={comment}
                                    key={`{comment${idx + 1}}`}
                                />
                            )}
                        </>
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

const CommentInput = ({ onReload }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [nickName, setNickName] = useState("");
    const [context, setContext] = useState("");
    const initComment = () => {
        setNickName("");
        setContext("");
    };
    const createComment = async () => {
        if (nickName === "" || context === "") {
            window.alert("닉네임과 댓글은 공백으로 작성할 수 없습니다.");
        } else {
            await CommentService.createComment(nickName, context);
            initComment();
            setIsOpen(false);
            onReload();
            window.alert("댓글이 등록되었습니다.");
        }
    };
    return (
        <>
            <div
                className="commentInput"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <div className="iconWrap">
                    <Plus />
                </div>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>댓글 작성</DialogTitle>
                        <DialogDescription>
                            *욕설 또는 비방글은 안내없이 삭제될 수 있습니다.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="digalogInput">
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
                </DialogContent>
            </Dialog>
        </>
    );
};

CommentInput.propTypes = {
    onReload: PropTypes.func.isRequired,
};

const Comment = ({ data }) => {
    const [date, setDate] = useState("");
    const calcDate = (dateStr) => {
        const created = new Date(dateStr);
        const now = new Date();
        console.log(created);
        const minusDate = now.getTime() - created.getTime();
        const diffDate = Math.floor(
            Math.abs(minusDate / (1000 * 60 * 60 * 24))
        );
        if (diffDate === 0) {
            const diffHour = Math.floor(Math.abs(minusDate / (1000 * 60 * 60)));
            if (diffHour === 0) {
                const diffMin = Math.floor(Math.abs(minusDate / (1000 * 60)));
                if (diffMin === 0) {
                    setDate(`방금`);
                } else {
                    setDate(`${diffMin}분 전`);
                }
            } else {
                setDate(`${diffHour}시간 전`);
            }
        } else {
            setDate(`${diffDate}일 전`);
        }
    };
    useEffect(() => {
        calcDate(data.created);
    }, []);
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
            <div className="header">
                <div className="avatar"></div>
                <div className="nickname">{data.nickname}</div>
                <div className="date">{date}</div>
            </div>
            <div className="context">{data.context}</div>
        </motion.div>
    );
};
Comment.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CommentSection;
