// 라이브러리
import PropTypes from "prop-types";
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
                    <Model5
                        onClick={() => {
                            pageOutHandler("/model/5");
                        }}
                    />
                    <Model6
                        onClick={() => {
                            pageOutHandler("/model/6");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
ModelSection.propTypes = {
    pageOutHandler: PropTypes.func.isRequired,
};

const ModelTitle = ({ title }) => {
    return <div className="modelTitle">Project : {title}</div>;
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
    return (
        <div className="modelWrap model1" onClick={onClick}>
            <video src={Sand} muted autoPlay loop />
            <ModelTitle title={"NIA"} />
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
Model1.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const Model2 = ({ onClick }) => {
    return (
        <div className="modelWrap model2" onClick={onClick}>
            <video src={Lava} muted autoPlay loop />
            <ModelTitle title={"RoBustQA"} />
            <ModelDescription
                desc={
                    "Schedule all your cards and gifts now and we’ll send them later"
                }
            />
            <div className="modelContent">content</div>
        </div>
    );
};
Model2.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const Model3 = ({ onClick }) => {
    return (
        <div className="modelWrap model3" onClick={onClick}>
            <video src={Tile} muted autoPlay loop />
            <ModelTitle title={"DeepScan"} />
            <ModelDescription
                desc={
                    "Use a pre-designed template or personalize with video, stickers, fonts, and more"
                }
            />
            <div className="modelContent">content</div>
        </div>
    );
};
Model3.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const Model4 = ({ onClick }) => {
    return (
        <div className="modelWrap model4" onClick={onClick}>
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
Model4.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const Model5 = ({ onClick }) => {
    return (
        <div className="modelWrap model5" onClick={onClick}>
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
Model5.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const Model6 = ({ onClick }) => {
    return (
        <div className="modelWrap model6" onClick={onClick}>
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
Model6.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ModelSection;
