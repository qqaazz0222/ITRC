// 라이브러리
import { useState, useRef, useEffect } from "react";
// 서비스
// 컴포넌트
import Banner from "@/components/banner/component";
// 이미지
import BannerBg from "@/assets/images/newsLetterBanner.png";
// 아이콘
import { LucideArrowLeft, LucideArrowRight, ArrowUpRight } from "lucide-react";
// 스타일
import "./style.css";

const NewsPage = () => {
    return (
        <div id="NewsPage" className="page">
            <div className="pageInfo">
                <div className="pageName">뉴스</div>
                <div className="pageSlogan">
                    <p>노인 복지 관련 새로운 소식과</p>
                    <p>인사이트를 만나보세요.</p>
                </div>
            </div>
            <div className="article hot">
                <NewsSlider
                    data={[
                        { image: null, title: "테스트1", content: "테스트" },
                        { image: null, title: "테스트2", content: "테스트" },
                        { image: null, title: "테스트3", content: "테스트" },
                        { image: null, title: "테스트4", content: "테스트" },
                    ]}
                />
            </div>
            <div className="article new">
                <h1>최신 기사</h1>
                <div className="newsGrid">
                    <NewsItem image={null} title="테스트" content="테스트" />
                    <NewsItem image={null} title="테스트" content="테스트" />
                    <NewsItem image={null} title="테스트" content="테스트" />
                    <NewsItem image={null} title="테스트" content="테스트" />
                    <NewsItem image={null} title="테스트" content="테스트" />
                    <NewsItem image={null} title="테스트" content="테스트" />
                </div>
            </div>
            <Banner
                slogan="동국대 ITRC에서 제공하는 뉴스레터를 받아보세요."
                description="노인 복지 관련 최신 뉴스를 이메일로 전해드립니다."
                funcname="구독하기"
                background={BannerBg}
            />
        </div>
    );
};

const NewsItem = ({ image, title, content }) => {
    return (
        <div className="newsItem">
            <div className="imgWrap">
                <img src={image} alt="" />
                <div className="dimmed">
                    <span>새 창에서 기사 보기</span>
                    <ArrowUpRight size={20} />
                </div>
            </div>
            <div className="textWrap">
                <h3 className="title">{title}</h3>
                <p className="content">{content}</p>
                <span className="info">2020</span>
            </div>
        </div>
    );
};

const NewsSlider = ({ data = [] }) => {
    const sliderRef = useRef();
    const [curSlide, setCurSlide] = useState(0);
    const [maxSlide, setMaxSlide] = useState(data.length);
    const slideHandler = (method) => {
        if (method === "prev") {
            if (curSlide === 0) {
                setCurSlide(maxSlide - 1);
            } else {
                setCurSlide(curSlide - 1);
            }
        } else if (method === "next") {
            if (curSlide === maxSlide - 1) {
                setCurSlide(0);
            } else {
                setCurSlide(curSlide + 1);
            }
        }
    };
    useEffect(() => {
        const handleResize = () => {
            const slideWidth = sliderRef.current.clientWidth;
            sliderRef.current.style.transform = `translateX(-${
                curSlide * slideWidth
            }px)`;
        };

        window.addEventListener("resize", handleResize);

        const slideWidth = sliderRef.current.clientWidth;
        sliderRef.current.style.transform = `translateX(-${
            curSlide * slideWidth
        }px)`;
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [curSlide]);
    return (
        <div id="NewsSlider">
            <div className="newsSlider">
                <div className="newsSlideWrap" ref={sliderRef}>
                    {data.map((news, index) => (
                        <div className="newsSlide" key={index}>
                            <img src={news.image} alt="" />
                            <div className="textWrap">
                                <h1>{news.title}</h1>
                                <p>{news.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="slideController prev"
                onClick={() => {
                    slideHandler("prev");
                }}
            >
                <LucideArrowLeft size={24} />
            </button>
            <button
                className="slideController next"
                onClick={() => {
                    slideHandler("next");
                }}
            >
                <LucideArrowRight size={24} />
            </button>
        </div>
    );
};

export default NewsPage;
