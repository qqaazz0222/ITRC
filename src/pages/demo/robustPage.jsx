// 라이브러리
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
// 서비스
// 컴포넌트
// 아이콘
import {} from "lucide-react";
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
        theme: "navy",
        text: littlePrince,
        cover: CoverLittlePrince,
    },
    {
        title: {
            en: "Snow White and the Seven Dwarfs",
            ko: "백설공주와 일곱 난쟁이",
        },
        theme: "blue",
        text: snowWhite,
        cover: CoverSnowWhite,
    },
    {
        title: {
            en: "Hansel and Gretel",
            ko: "헨젤과 그레텔",
        },
        theme: "deepgreen",
        text: hanselAndGretel,
        cover: CoverHanzelAndGretel,
    },
    {
        title: {
            en: "Rapunzel",
            ko: "라푼젤",
        },
        theme: "purple",
        text: rapunzel,
        cover: CoverRapunzel,
    },
    {
        title: {
            en: "Cinderella",
            ko: "신데렐라",
        },
        theme: "sky",
        text: cinderella,
        cover: CoverCinderella,
    },
];

const DemoRobustPage = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    useEffect(() => {
        useTheme("black");
    }, []);
    useEffect(() => {
        console.log(BookData[(currentIdx + 2) % BookData.length].theme);
        useTheme(BookData[(currentIdx + 2) % BookData.length].theme);
    }, [currentIdx]);
    return (
        <div id="demoRobustPage" className="page">
            <div className="pageSample" id="test1">
                <div className="bookShelf">
                    {BookData.map((book) => (
                        <img
                            onClick={() => {
                                window.location.href = "#test2";
                                // document.getElementById(
                                //     "test1"
                                // ).style.transform = "translateY(-100%)";

                                // document.getElementById(
                                //     "test2"
                                // ).style.transform = "translateY(-100%)";
                            }}
                            className="coverImg"
                            src={book.cover}
                            alt={book.title.en}
                            key={book.title.en}
                        />
                    ))}
                </div>
                <button
                    onClick={() => {
                        setCurrentIdx(currentIdx - 1);
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        setCurrentIdx(currentIdx + 1);
                    }}
                >
                    +
                </button>
            </div>
            <div className="pageSample" id="test2">
                asdasdadsa
            </div>
        </div>
    );
};

export default DemoRobustPage;
