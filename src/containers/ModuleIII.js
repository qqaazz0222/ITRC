import React, { useEffect, useState } from "react";
import axios from "../apis/axios";
import { checkAllowFileType } from "./utils";
import ImageItem from "./ImageItem";
import { contents } from "./contents";
import Images from "./imageList";

const baseURL = process.env.REACT_APP_SERVER_MODULE_III;
// const socketIO = socket.connect(process.env.REACT_APP_SERVER_MODULE_III);
export default function ModuleI() {
    const [action, setAction] = useState("");
    const [imageList, setImageList] = useState([]);
    const [statusUpload, setStatusUpload] = useState(false);
    const moduleContent = contents.filter(
        (item) => item.name === "module_3"
    )[0];

    const handleValueFile = (e) => {
        const { size, type, name } = e.target.files[0];
        if (size / 1000000 < 100) {
            if (checkAllowFileType(type, name)) {
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append("file", file);
                setStatusUpload(true);
                axios
                    .post(baseURL + "/service/uploadfile", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((res) => {
                        const { data, result } = res;
                        if (result) {
                            setStatusUpload(false);
                            setImageList(data);
                        }
                    })
                    .catch(() => {
                        alert("Error upload file");
                    });
            } else {
                console.log("File type", type);
                alert("File type error");
            }
        } else {
            console.log("파일 업데이트 시 용량 초과");
            alert("File size error");
        }
    };

    const handleClickUpFile = () => {
        const upFile = document.createElement("input");
        upFile.setAttribute("type", "file");
        upFile.setAttribute("name", "file");
        upFile.setAttribute("style", "display: none");
        document.body.appendChild(upFile);
        upFile.click();
        upFile.onchange = handleValueFile;
    };

    const handleResultImageList = () => {
        axios
            .get("/user/image_lists")
            .then((res) => {
                console.log("Image List!", res);
                const { data } = res;
                setImageList(data);
            })
            .catch(() => {
                alert("Error upload file");
            });
    };

    const handleSetAction = () => {
        if (action === "process") {
            setAction("");
        } else {
            setAction("process");
        }
    };
    return (
        <div className="module-item">
            <div>
                <h2>딥러닝 기반 사진 검색 모델</h2>
            </div>
            <div className="module-item__intro">
                <h3>1. 소개</h3>
                <p>{moduleContent.introduction[0]}</p>
                <p>{moduleContent.introduction[1]}</p>
                <p>{moduleContent.introduction[2]}</p>
            </div>
            <div className="module-item__arch">
                <h3>2. 모델 아키텍처</h3>
                <p>{moduleContent.architecture[0]}</p>
                <ol className="module-item__arch-list">
                    <li>{moduleContent.architecture[1]}</li>
                    <li>{moduleContent.architecture[2]}</li>
                    <li>{moduleContent.architecture[3]}</li>
                    <li>{moduleContent.architecture[4]}</li>
                    <li>{moduleContent.architecture[5]}</li>
                    <li>{moduleContent.architecture[6]}</li>
                </ol>
                <div className="module-item__arch-image">
                    <img src={Images.ocrImage} />
                    <p>딥러닝 기반 사진 검색 모델 아키텍처</p>
                </div>
            </div>
            <div className="module-item__lib">
                <h3>3. 사용 라이브러리 및 패키지</h3>
                <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
                    <li>YOLOv5</li>
                    <li>Tesseract OCR</li>
                </ol>
            </div>
            <div className="module-item__examp">
                <h3>4. 실행 예제</h3>
                <div>
                    <button onClick={() => handleSetAction()}>실행</button>
                </div>
                {action === "process" && (
                    <div style={{ marginTop: "10px" }}>
                        <p>해당 모듈을 실행하기 위해서 사진을 업로드 하세요.</p>
                        <button onClick={() => handleClickUpFile()}>
                            {" "}
                            사진 업로드
                        </button>
                        {statusUpload && <div> 처리중...</div>} <br />
                    </div>
                )}
                <div className="image-list">
                    {imageList.length !== 0 &&
                        imageList.map((image, idx) => (
                            <ImageItem image={image} />
                        ))}
                </div>
            </div>
        </div>
    );
}
