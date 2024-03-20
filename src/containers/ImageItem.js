import React, { useEffect, useState } from "react";

const baseURL = process.env.REACT_APP_SERVER_MODULE_III;
export default function ImageItem({ image }) {
    const [viewDetail, setViewDetail] = useState(false);
    const handleViewDetail = () => {
        setViewDetail(!viewDetail);
    };
    return (
        <div className="image-item">
            <div>
                <img
                    src={`${baseURL}/image/${image.image_name}`}
                    alt="result"
                />
                <p>{image.image_name}</p>
                <div>
                    <span
                        style={{ cursor: "pointer", fontSize: "13px" }}
                        onClick={() => handleViewDetail()}
                    >
                        자세하게
                    </span>
                    {viewDetail && (
                        <div>
                            <p>ocr_result: {image.ocr_result}</p>
                            <p>yolo_result: {image.yolo_result}</p>
                            <p>time: {image.update}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
