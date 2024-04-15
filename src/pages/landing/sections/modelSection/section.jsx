// 라이브러리
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
// 서비스
// 컴포넌트
// 아이콘
// 이미지
// 비디오
import Sand from "@/assets/videos/sand.mp4";
import Tile from "@/assets/videos/tile.mp4";
import Lava from "@/assets/videos/lava.mp4";
// 스타일
import "./style.css";

const ModelSection = ({ pageOutHandler }) => {
    return (
        <div id="modelSection" className="section">
            <div className="article">
                <div className="mainTypo">
                    <p>Explore endless</p>
                    <p>Posibilities.</p>
                </div>
                <div className="modelContainer">
                    <Model1
                        onClick={() => {
                            pageOutHandler("/model/nia");
                        }}
                    />
                    <Model2
                        onClick={() => {
                            pageOutHandler("/model/robustqa");
                        }}
                    />
                    <Model3
                        onClick={() => {
                            pageOutHandler("/model/deepscan");
                        }}
                    />
                    <Model4
                        onClick={() => {
                            pageOutHandler("/model/4");
                        }}
                    />
                    {/* <Model5
                        onClick={() => {
                            pageOutHandler("/model/5");
                        }}
                    />
                    <Model6
                        onClick={() => {
                            pageOutHandler("/model/6");
                        }}
                    /> */}
                </div>
            </div>
        </div>
    );
};
ModelSection.propTypes = {
    pageOutHandler: PropTypes.func.isRequired,
};

const ModelTitle = ({ title }) => {
    return (
        <div className="modelTitle">
            {title.map((text, idx) => (
                <p className="modelTitleRow" key={idx}>
                    {text}
                </p>
            ))}
        </div>
    );
};
ModelTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

const ModelDescription = ({ desc }) => {
    return <div className="modelDesc">{desc}</div>;
};
ModelDescription.propTypes = {
    desc: PropTypes.string.isRequired,
};

const Model1 = ({ onClick }) => {
    const videoRef = useRef();
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        if (isHover) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isHover]);
    return (
        <div
            className="modelWrap model1"
            onClick={onClick}
            onMouseOver={() => {
                setIsHover(true);
            }}
            onMouseOut={() => {
                setIsHover(false);
            }}
        >
            <video
                ref={videoRef}
                src={Sand}
                muted
                loop
                playsInline
                autoPlay={isMobile}
            />
            <ModelTitle
                title={["범죄 사전 예방에 중점을 둔", "이상행위 탐지 모델"]}
            />
            <ModelDescription
                desc={
                    "주거지역 내에서 이상 행동을 실시간으로 탐지하여 범죄를 사전에 예방하는 데 중점을 둔 모델입니다."
                }
            />
        </div>
    );
};
Model1.propTypes = {
    onClick: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

const Model2 = ({ onClick }) => {
    const videoRef = useRef();
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        if (isHover) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isHover]);
    return (
        <div
            className="modelWrap model2"
            onClick={onClick}
            onMouseOver={() => {
                setIsHover(true);
            }}
            onMouseOut={() => {
                setIsHover(false);
            }}
        >
            <video
                ref={videoRef}
                src={Lava}
                muted
                loop
                playsInline
                autoPlay={isMobile}
            />
            <ModelTitle title={["자동 질의응답 모델"]} />
            <ModelDescription
                desc={
                    "일상생활에서 사용자가 직면하는 다양한 정보의 필요에 신속하고 정확하게 대응할 수 있는 강력한 도구입니다."
                }
            />
        </div>
    );
};
Model2.propTypes = {
    onClick: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

const Model3 = ({ onClick }) => {
    const videoRef = useRef();
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        if (isHover) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isHover]);
    return (
        <div
            className="modelWrap model3"
            onClick={onClick}
            onMouseOver={() => {
                setIsHover(true);
            }}
            onMouseOut={() => {
                setIsHover(false);
            }}
        >
            <video
                ref={videoRef}
                src={Tile}
                muted
                loop
                playsInline
                autoPlay={isMobile}
            />
            <ModelTitle title={["딥러닝 기반", "사진 검색 모델"]} />
            <ModelDescription
                desc={
                    "이미지의 시각적 특징과 패턴을 분석하여 유사한 이미지를 찾거나 관련 정보를 추출하는 기술입니다."
                }
            />
        </div>
    );
};
Model3.propTypes = {
    onClick: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

const Model4 = ({ onClick }) => {
    return (
        <div className="modelWrap model4" onClick={onClick}>
            <ModelTitle title={["Model 4"]} />
            <ModelDescription
                desc={
                    "Use a pre-designed template or personalize with video, stickers, fonts, and more"
                }
            />
        </div>
    );
};
Model4.propTypes = {
    onClick: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

// const Model5 = ({ onClick }) => {
//     return (
//         <div className="modelWrap model5" onClick={onClick}>
//             <ModelTitle title={["Model 5"]} />
//             <ModelDescription
//                 desc={
//                     "Use a pre-designed template or personalize with video, stickers, fonts, and more"
//                 }
//             />
//         </div>
//     );
// };
// Model5.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     isMobile: PropTypes.bool.isRequired,
// };

// const Model6 = ({ onClick }) => {
//     return (
//         <div className="modelWrap model6" onClick={onClick}>
//             <ModelTitle title={["Model 6"]} />
//             <ModelDescription
//                 desc={
//                     "Use a pre-designed template or personalize with video, stickers, fonts, and more"
//                 }
//             />
//         </div>
//     );
// };
// Model6.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     isMobile: PropTypes.bool.isRequired,
// };

export default ModelSection;
