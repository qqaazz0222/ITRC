import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.css";

const DetailLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sideBarHandler = (isOpen) => {
        const target = document.getElementById("sideBarSection");
        if (isOpen) {
            target.style.width = "15rem";
        } else {
            target.style.width = "6.5rem";
        }
    };
    useEffect(() => {
        sideBarHandler(isOpen);
    }, [isOpen]);
    return (
        <div id="detailLayout">
            <div id="sideBarSection" className={isOpen && "activate"}>
                sidebar
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    테스트
                </button>
            </div>
            <div id="mainSection">
                <div id="headerSection"></div>
                <div id="contentSection">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DetailLayout;
