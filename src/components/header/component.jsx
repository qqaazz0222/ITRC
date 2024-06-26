// 라이브러리
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const Header = ({ pageOutHandler }) => {
    const [isRoot, setIsRoot] = useState(false);
    useEffect(() => {
        if (window.location.pathname === "/") {
            setIsRoot(true);
        }
    }, []);
    return (
        <div id="header">
            <div
                className="logoWrap"
                onClick={() => {
                    if (isRoot) {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    } else {
                        pageOutHandler("/");
                    }
                }}
            >
                <svg className="logo" viewBox="0 0 28.030001 26.309999">
                    <path d="M7.318 15.358.621 17.32c-.7.204-.828.766-.285 1.247l2.042 1.806c.72.624 1.366.698 2.187.315l5.144-2.399v-.611zM9.71 12.521 3.362 4.867c-.477-.572-1.002-.476-1.228.239L1.28 7.862c-.214.691-.132 1.498.556 2.173l5.482 5.323 2.391-.7z" />
                    <path d="m9.71 14.657-2.392.701 2.391 2.32zM10.345 18.302l5.22 7.564c.412.594 1.009.611 1.387-.067l1.075-1.93c.47-.867.354-1.497-.234-2.136l-2.251-2.54z" />
                    <path d="m15.542 19.193 8.115 1.391c.952.16 1.57-.094 2.14-.794l1.998-2.449c.458-.56.238-1.035-.492-1.055l-12.145-.335a3.326 3.326 0 0 1-1.04 1.633z" />
                    <path d="M25.71 11.939c.692-.26.77-.787.156-1.194L23.21 8.987l-7.932 6.39c-.026.199-.066.39-.12.574z" />
                    <path d="M23.21 8.987c-.53-.36-1.22-.355-1.958.042l-6.627 3.59c.44.595.689 1.362.689 2.211 0 .187-.012.37-.036.548z" />
                    <path d="M21.252 9.029c.738-.397 1.429-.402 1.958-.042l1.962-1.583c.75-.602.93-1.184.713-2.101l-.821-3.305c-.175-.699-.724-.84-1.223-.314L14.08 12.045c.205.166.388.359.546.574z" />
                    <path d="M16.894 4.445c.312-.846.151-1.515-.506-2.134L14.229.283c-.528-.496-1.07-.322-1.204.385l-.555 2.94c.617.346.825.954.779 1.72l-.415 6.114c.47.108.891.316 1.245.603z" />
                    <path d="M9.903 2.206c-.643-.35-1.11-.032-1.037.685l.843 8.468h1.299l1.462-7.75z" />
                    <path d="M13.249 5.328c.046-.766-.162-1.374-.78-1.72l-1.461 7.75h1.073c.263 0 .515.03.753.084zM14.118 17.584a3.125 3.125 0 0 1-2.037.718h-1.736l5.197.89z" />
                </svg>
                <div className="logoTypo">ITRC-KSRC</div>
            </div>
            <div className="menuWrap">
                {/* <div
                    className="menu link"
                    onClick={() => {
                        pageOutHandler("/about/project");
                    }}
                >
                    About Project
                </div>
                <div
                    className="menu link"
                    onClick={() => {
                        pageOutHandler("/about/developer");
                    }}
                >
                    Developer
                </div> */}
                <div
                    className="menu btn"
                    onClick={() => {
                        location.href = "/#section3";
                    }}
                >
                    Try
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {
    pageOutHandler: PropTypes.func.isRequired,
};

export default Header;
