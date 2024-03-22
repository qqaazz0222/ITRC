// 라이브러리
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
// 서비스
import RobustqaService from "@/services/robustqaService";
// 컴포넌트
// 아이콘
import {
    ChevronLeft,
    ChevronRight,
    SendHorizontal,
    BookOpenCheck,
    PenLine,
    Loader,
} from "lucide-react";
// 텍스트
import {
    cinderella,
    hanselAndGretel,
    littlePrince,
    rapunzel,
    snowWhite,
} from "./text";
// 이미지
import CoverLittlePrince from "@/assets/images/littlePrince.jpg";
import CoverSnowWhite from "@/assets/images/snowWhite.jpg";
import CoverHanzelAndGretel from "@/assets/images/hanselAndGretel.jpg";
import CoverRapunzel from "@/assets/images/rapunzel.jpg";
import CoverCinderella from "@/assets/images/cinderella.jpg";
// 스타일
import "./style.css";

const typoVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};
const coverVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.4,
        },
    },
};
const btnVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
        },
    },
};

const BookData = [
    {
        title: {
            en: "The Little Prince",
            ko: "어린왕자",
        },
        theme: "theLittlePrince",
        text: littlePrince,
        cover: CoverLittlePrince,
        questions: [
            "What did the adults think the child’s drawing looked like?",
            "What is the pilot asked to draw by the little prince?",
            "The pilot gives the little prince something and which he keeps it in his pocket. What is it? ",
            "What does the discoverer of the little prince’s planet do in order to be taken seriously? ",
            "How many times in one day does the sun set on the little prince’s planet? ",
        ],
    },
    {
        title: {
            en: "Snow White and the Seven Dwarfs",
            ko: "백설공주와 일곱 난쟁이",
        },
        theme: "snowWhite",
        text: snowWhite,
        cover: CoverSnowWhite,
        questions: ["How many dwarfs in this story?"],
    },
    {
        title: {
            en: "Hansel and Gretel",
            ko: "헨젤과 그레텔",
        },
        theme: "hanselAndGretel",
        text: hanselAndGretel,
        cover: CoverHanzelAndGretel,
        questions: [],
    },
    {
        title: {
            en: "Rapunzel",
            ko: "라푼젤",
        },
        theme: "rapunzel",
        text: rapunzel,
        cover: CoverRapunzel,
        questions: [],
    },
    {
        title: {
            en: "Cinderella",
            ko: "신데렐라",
        },
        theme: "cinderella",
        text: cinderella,
        cover: CoverCinderella,
        questions: [],
    },
];

const DemoRobustPage = () => {
    const textAreaRef = useRef();
    const [isProcess, setIsProcess] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [question, setQuestion] = useState("");
    const [chat, setChat] = useState([]);
    const checkServer = async () => {
        const response = await RobustqaService.serverCheck();
        if (response) {
            console.log("[ROBUSTQA SERVER] Server Is Working");
        } else {
            console.log("[ROBUSTQA SERVER ERROR] Server Is Not Working");
            window.alert("서버에 연결할 수 없습니다.");
        }
    };
    const pageHandler = (type) => {
        const bookSection = document.querySelector(".bookSection");
        const questionSection = document.querySelector(".questionSection");
        if (type === "down") {
            bookSection.style.transform = "translateY(-100svh)";
            questionSection.style.transform = "translateY(-100svh)";
        } else if (type === "up") {
            bookSection.style.transform = "translateY(0)";
            questionSection.style.transform = "translateY(0)";
        }
    };
    const initData = () => {
        textAreaRef.current.value = "";
        setQuestion("");
        setChat([]);
    };
    const initQuestion = () => {
        textAreaRef.current.value = "";
        setQuestion("");
    };
    const sendQuestion = async () => {
        setIsProcess(true);
        let temp = [...chat, { owner: "my", value: question }];
        setChat(temp);
        initQuestion();
        const response = await RobustqaService.postAnalysisQuestion(
            BookData[currentIdx].text,
            question
        );
        try {
            let answer = response.data.split("\n");
            console.log(answer[answer.length - 2]);
            temp.push({
                owner: "ai",
                value: answer[answer.length - 2].split("=")[1].trim(),
            });
            setChat(temp);
        } catch (error) {
            console.log(error);
            temp.push({
                owner: "ai",
                value: "오류가 발생했습니다.",
            });
            setChat(temp);
        }
        setIsProcess(false);
    };
    useEffect(() => {
        useTheme("black");
        checkServer();
    }, []);
    useEffect(() => {
        initData();
        const target = document.querySelector(".bookShelf");
        target.style.transform = `translateX(-${100 * currentIdx}svw)`;
        useTheme(BookData[currentIdx].theme);
    }, [currentIdx]);
    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }, [question]);
    return (
        <div id="demoRobustPage" className="page">
            <div className="bookSection">
                <div className="bookShelf">
                    {BookData.map((book) => (
                        <div className="bookWrap" key={book.title.en}>
                            <motion.img
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{
                                    once: false,
                                }}
                                variants={coverVariants}
                                className="coverImg"
                                src={book.cover}
                                alt={book.title.en}
                            />
                            <div className="mainTypo">
                                <motion.p
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{
                                        once: false,
                                    }}
                                    variants={typoVariants}
                                >
                                    {book.title.en}
                                </motion.p>
                            </div>
                            <div className="subTypo">
                                <motion.p
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{
                                        once: false,
                                    }}
                                    variants={coverVariants}
                                >
                                    {book.title.ko}
                                </motion.p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="controller">
                    {currentIdx > 0 ? (
                        <motion.button
                            className="btn"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{
                                once: false,
                            }}
                            variants={btnVariants}
                            onClick={() => {
                                setCurrentIdx(currentIdx - 1);
                            }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                    ) : (
                        <div className="btnSpacer"></div>
                    )}
                    <motion.button
                        className="animBtn"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{
                            once: false,
                        }}
                        variants={btnVariants}
                        onClick={() => {
                            pageHandler("down");
                        }}
                    >
                        <p>선택하기</p>
                        <p>
                            <BookOpenCheck className="w-6 h-6" />
                        </p>
                    </motion.button>
                    {currentIdx < BookData.length - 1 ? (
                        <motion.button
                            className="btn"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{
                                once: false,
                            }}
                            variants={btnVariants}
                            onClick={() => {
                                setCurrentIdx(currentIdx + 1);
                            }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    ) : (
                        <div className="btnSpacer"></div>
                    )}
                </div>
            </div>
            <div className="questionSection">
                <div className="chatWrap" key={chat.length}>
                    {chat.map((msg, idx) => (
                        <div
                            className={`msgWrap ${msg.owner}`}
                            key={`msg${idx}`}
                        >
                            <div className="msg">{msg.value}</div>
                        </div>
                    ))}
                    {isProcess && (
                        <div className={`msgWrap ai`} key={`msgWaiting`}>
                            <div className="msgWaiting">
                                <div className="left">
                                    <Loader className="w-4 h-4" />
                                    <p>인공지능이</p>
                                </div>
                                <div className="right">
                                    <div className="textWrap">
                                        <p>질문을 분석하고 있어요...</p>
                                        <p>열심히 책을 읽고 있어요...</p>
                                        <p>
                                            질문에 대한 내용을 찾아보고
                                            있어요...
                                        </p>
                                        <p>
                                            찾은 내용을 바탕으로 답변을 생성하고
                                            있어요...
                                        </p>
                                        <p>거의 다 준비 되었어요...</p>
                                        <p>조금만 더 기다려 주세요...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="block"></div>
                </div>
                <div className="questionWrap">
                    <div className="questionInput">
                        <textarea
                            rows="1"
                            ref={textAreaRef}
                            onChange={(e) => {
                                setQuestion(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.keyCode == 13) {
                                    if (!e.shiftKey) {
                                        event.preventDefault();
                                        sendQuestion();
                                    }
                                }
                            }}
                            placeholder="책 내용에 관련된 무엇이든 물어보세요"
                        ></textarea>
                        <div className="questipnFuncWrap">
                            <div className="sampleQuestionWrap">
                                {BookData[currentIdx].questions.map(
                                    (question, idx) => (
                                        <button
                                            className="sampleQuestion sampleBtn"
                                            key={`q${idx}`}
                                            onClick={() => {
                                                textAreaRef.current.value =
                                                    question;
                                                setQuestion(question);
                                            }}
                                        >
                                            <p>샘플 #{idx + 1}</p>
                                            <p>Use</p>
                                        </button>
                                    )
                                )}
                            </div>
                            <button className="colBtn" onClick={sendQuestion}>
                                <SendHorizontal className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="controller">
                    <motion.button
                        className="animBtn"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{
                            once: false,
                        }}
                        variants={btnVariants}
                        onClick={() => {
                            pageHandler("up");
                        }}
                    >
                        <p>책 변경</p>
                        <p>
                            <PenLine className="w-6 h-6" />
                        </p>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default DemoRobustPage;
