// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
import LogoSmall from "@/assets/images/logo-small.png";
import LogoWhiteTypoSymbol from "@/assets/images/logo-white-typo-symbol.png";
// 스타일
import "./style.css";

// eslint-disable-next-line react/prop-types
const SideBar = ({ onActivate = false }) => {
    const [isActivate, setIsActivate] = useState(onActivate);
    const sideBarHandler = (isOpen) => {
        const target = document.getElementById("sideBar");
        if (isOpen) {
            target.style.width = "15rem";
        } else {
            target.style.width = "6.5rem";
        }
    };
    useEffect(() => {
        sideBarHandler(isActivate);
    }, [isActivate]);
    return (
        <div id="sideBar" className={isActivate && "activate"}>
            <div className="content activated">
                <img
                    className="sideBarLogo"
                    src={LogoWhiteTypoSymbol}
                    alt="logo"
                />
            </div>
            <div className="content deactivated">
                <div className="logoWarp">
                    <img className="sideBarLogo" src={LogoSmall} alt="logo" />
                </div>
                <div
                    className="menuWrap"
                    onClick={() => {
                        setIsActivate(!isActivate);
                    }}
                >
                    <span className="menuBar menuBar1"></span>
                    <span className="menuBar menuBar2"></span>
                    <span className="menuBar menuBar3"></span>
                    <span className="menuTag">MENU</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
