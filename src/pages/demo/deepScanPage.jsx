// 라이브러리
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
import axios from "axios";
// 서비스
import ModuleService from "@/services/moduleService";
// 컴포넌트
import { Input } from "@/components/ui/input";
// 아이콘
import { Loader } from "lucide-react";
// 텍스트
// 이미지
import PlaceHolder from "@/assets/images/placeholder.jpg";
// 동영상
import Video from "@/assets/videos/tile.mp4";
// 스타일
import "./style.css";

const IMGURL = "http://210.94.194.83:5050/deepscan/image/";

const DemoDeepScanPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [imgFile, setImgFile] = useState("");
    const [textData, setTextData] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const imgRef = useRef();
    const saveImgFile = () => {
        setTextData([]);
        setSearchKey("");
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        };
    };
    const checkServer = async () => {
        const response = await ModuleService.deepscanServerCheck();
        if (response) {
            console.log("[DEEPSCAN SERVER] Server Is Working");
        } else {
            console.log("[DEEPSCAN SERVER ERROR] Server Is Not Working");
            window.alert("서버에 연결할 수 없습니다.");
        }
    };
    const postImageFile = async () => {
        if (imgRef.current.files.length !== 0) {
            setIsLoading(true);
            const formdata = new FormData();
            formdata.append("img", imgRef.current.files[0]);

            const config = {
                Headers: {
                    "content-type": "multipart/form-data",
                },
            };
            const response = await axios.post(
                "http://210.94.194.83:5050/deepscan/upload",
                formdata,
                config
            );
            setImgFile(IMGURL + response.data.detect);
            setTextData(response.data.text);
            setSearchKey(response.data.key);
            setIsLoading(false);
        } else {
            window.alert("이미지를 선택해주세요.");
        }
    };
    const search = () => {
        window.open(`https://www.google.com/search?q=${searchKey}`, "_blank");
    };
    useEffect(() => {
        useTheme("orange");
        checkServer();
    }, []);
    return (
        <div id="demoDeepScanPage" className="page">
            <motion.video
                className="bgVideo"
                src={Video}
                muted
                autoPlay
                loop
                playsInline
            />
            <div className="article">
                <div className={`preview ${isLoading && "loading"}`}>
                    <img
                        src={imgFile ? imgFile : PlaceHolder}
                        alt="Input Image"
                    />
                    <span>
                        <Loader className="w-8 h-8 text-white" />
                    </span>
                </div>
                <div className="input">
                    <div className="grid w-full items-center gap-1.5">
                        <Input
                            id="picture"
                            type="file"
                            onChange={saveImgFile}
                            ref={imgRef}
                        />
                    </div>
                    <button className="uploadBtn" onClick={postImageFile}>
                        업로드
                    </button>
                </div>
                {textData.length > 0 && (
                    <div className="tags">
                        {textData.map((text, idx) => (
                            <p className="tag" key={`tag${idx + 1}`}>
                                {text}
                            </p>
                        ))}
                    </div>
                )}
                {searchKey !== "" && (
                    <button className="searchBtn" onClick={search}>
                        분석 결과로 검색
                    </button>
                )}
            </div>
        </div>
    );
};

export default DemoDeepScanPage;
