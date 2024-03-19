// 라이브러리
import { motion } from "framer-motion";
// 서비스
// 컴포넌트
// 아이콘
import { ScanSearch } from "lucide-react";
// 이미지
import ThumbModel1 from "@/assets/thumbnail/thumb-model-1.png";
import ThumbModel1_1 from "@/assets/thumbnail/thumb-model-1-1.png";
import ThumbModel1_2 from "@/assets/thumbnail/thumb-model-1-2.png";
// 비디오
import VideoModel1 from "@/assets/videos/video-model-1.mp4";
// 스타일
import "./style.css";

const ModelSection = () => {
    return (
        <div id="modelSection" className="section">
            <div className="article">
                <div className="mainTypo">
                    <p>Explore endless</p>
                    <p>Posibilities.</p>
                </div>
                <div className="modelContainer">
                    <Model1 />
                    <Model2 />
                    <Model3 />
                    <Model4 />
                    <Model5 />
                    <Model6 />
                </div>
            </div>
        </div>
    );
};

const ModelTitle = ({ title }) => {
    return <div className="modelTitle">{title}</div>;
};
const ModelDescription = ({ desc }) => {
    return <div className="modelDesc">{desc}</div>;
};

const Model1 = () => {
    return (
        <div className="modelWrap model1">
            <ModelTitle title={"Detect Strange"} />
            <ModelDescription
                desc={
                    "Use a pre-designed template or personalize with video, stickers, fonts, and more"
                }
            />
            <div className="modelContent">
                <img
                    className="thumb thumb1_1"
                    src={ThumbModel1_1}
                    alt="thumbModel1"
                />
                <img
                    className="thumb thumb1_2"
                    src={ThumbModel1_2}
                    alt="thumbModel1"
                />
                <img
                    className="thumb thumb1"
                    src={ThumbModel1}
                    alt="thumbModel1"
                />
                <video
                    className="video video1"
                    src={VideoModel1}
                    alt="videoModel1"
                    muted
                    autoPlay
                    loop
                />
                <ScanSearch className="icon1 w-20 h-20 text-white" />
                <div className="scrollResult">
                    <div className="item">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="item">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="item">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="item">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="item">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Model2 = () => {
    return (
        <div className="modelWrap model2">
            <ModelTitle title={"Answer Anything"} />
            <ModelDescription
                desc={
                    "Schedule all your cards and gifts now and we’ll send them later"
                }
            />
            <div className="modelContent">content</div>
        </div>
    );
};
const Model3 = () => {
    return (
        <div className="modelWrap model3">
            <ModelTitle title={"Image Search"} />
            <ModelDescription
                desc={
                    "Use a pre-designed template or personalize with video, stickers, fonts, and more"
                }
            />
            <div className="modelContent">content</div>
        </div>
    );
};
const Model4 = () => {
    return (
        <div className="modelWrap model4">
            <ModelTitle title={"Model 4"} />
            <ModelDescription
                desc={
                    "Use a pre-designed template or personalize with video, stickers, fonts, and more"
                }
            />
            <div className="modelContent">content</div>
        </div>
    );
};
const Model5 = () => {
    return (
        <div className="modelWrap model5">
            <ModelTitle title={"Model 5"} />
            <ModelDescription
                desc={
                    "Use a pre-designed template or personalize with video, stickers, fonts, and more"
                }
            />
            <div className="modelContent">content</div>
        </div>
    );
};
const Model6 = () => {
    return (
        <div className="modelWrap model6">
            <ModelTitle title={"Model 6"} />
            <ModelDescription
                desc={
                    "Use a pre-designed template or personalize with video, stickers, fonts, and more"
                }
            />
            <div className="modelContent">content</div>
        </div>
    );
};

export default ModelSection;
