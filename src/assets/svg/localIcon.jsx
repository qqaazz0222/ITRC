import React from "react";

const SVG = ({ width, height, viewBox, children }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
};

const Arrow = ({ color = "white" }) => {
    return (
        <div className="iconWrap arrow">
            <SVG width="18" height="16" viewBox="0 0 18 16">
                <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7H1V9Z"
                    fill={color === "white" ? "white" : "black"}
                />
            </SVG>
        </div>
    );
};

const Plus = ({ color = "white" }) => {
    return (
        <div className="iconWrap plus">
            <SVG width="16" height="16" viewBox="0 0 16 16">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44771 0 8C0 8.55228 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1C9 0.447715 8.55229 0 8 0Z"
                    fill={color === "white" ? "white" : "black"}
                />
            </SVG>
        </div>
    );
};
const Send = ({ color = "white" }) => {
    return (
        <div className="iconWrap send">
            <SVG width="17" height="16" viewBox="0 0 17 16">
                <path
                    d="M2.91096 8L15.411 8"
                    stroke={color === "white" ? "white" : "black"}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M2.91096 8L1.41096 14.5"
                    stroke={color === "white" ? "white" : "black"}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M2.91096 8L1.41096 1.5"
                    stroke={color === "white" ? "white" : "black"}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M1.41096 1.5L15.411 8"
                    stroke={color === "white" ? "white" : "black"}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M1.41096 14.5L15.4111 7.99995"
                    stroke={color === "white" ? "white" : "black"}
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </SVG>
        </div>
    );
};

const DguLogo = ({ color = "white" }) => {
    return (
        <SVG width="79" height="74" viewBox="0 0 79 74">
            <g clip-path="url(#clip0_20_97)">
                <path
                    d="M27.3611 41.2231V51.4384L12.8618 58.1883C11.929 58.6227 11.0792 58.8503 10.2604 58.8503C9.04783 58.8503 7.91297 58.3486 6.70038 57.2986L0.948327 52.2194C-0.585553 50.8695 -0.222811 49.2868 1.74636 48.7126L19.7591 43.4421H19.7643L20.1944 43.3179L20.6193 43.1938L21.0494 43.0697L21.4743 42.9455L27.3611 41.2231Z"
                    fill="#323232"
                />
                <path
                    d="M27.3611 35.2182V40.4163L27.1383 40.4784L20.837 42.3249L20.4017 42.449L19.9819 42.5732H19.9767L5.17169 28.2201C3.23361 26.327 3.00042 24.0564 3.60153 22.1116L6.01636 14.3583C6.37392 13.2256 7.00612 12.6411 7.72643 12.6411C8.2809 12.6411 8.89238 12.9877 9.47795 13.6859L27.3611 35.2182Z"
                    fill="#323232"
                />
                <path
                    d="M50.7994 67.1363L47.7731 72.5621C47.229 73.5345 46.5243 74 45.8091 74C45.1251 74 44.4307 73.5707 43.8607 72.7483L29.7656 52.3694L29.4598 51.9246V51.9195L29.1489 51.4746H34.0459C35.9996 51.4746 37.7355 50.9109 39.1554 49.9229C39.2642 49.8557 39.3731 49.7781 39.4767 49.6954C39.5803 49.6178 39.684 49.535 39.7824 49.4523L42.9746 53.0522V53.0574L43.384 53.5177L43.7985 53.9832L44.2079 54.4435L44.2131 54.4487L44.6173 54.909H44.6225L50.1413 61.1261C51.7996 62.9209 52.1208 64.695 50.7994 67.1363Z"
                    fill="#323232"
                />
                <path
                    d="M78.3263 48.7747L72.6934 55.6642C71.3928 57.2521 70.0092 58.0228 68.1073 58.0228C67.6565 58.0228 67.1746 57.9814 66.6616 57.8935L45.0266 54.1953L44.3789 53.466L44.1975 53.2643L40.3628 48.9403L40.3524 48.9247C41.223 48.061 41.9122 47.0058 42.389 45.8162L42.9901 45.5886L44.752 44.9214L76.9375 45.8058C78.9948 45.8576 79.6166 47.1972 78.3263 48.7747Z"
                    fill="#323232"
                />
                <path
                    d="M42.7673 44.4765H42.8191C42.8243 44.461 42.8295 44.4403 42.8295 44.4248L42.7673 44.4765Z"
                    fill="#323232"
                />
                <path
                    d="M72.4499 33.5785L44.6224 44.1403L43.7 44.5024H43.6741L42.7155 44.8645C42.7517 44.7352 42.788 44.6058 42.8191 44.4765C42.8243 44.461 42.8295 44.4403 42.8295 44.4248L43.2337 44.1041L43.5394 43.8559L65.4438 26.239L65.8947 25.877L66.0864 25.7218L72.8904 30.2165C74.616 31.3699 74.3984 32.844 72.4499 33.5785Z"
                    fill="#323232"
                />
                <path
                    d="M42.8295 44.4248C42.8295 44.4403 42.8243 44.461 42.8191 44.4765H42.7673L42.8295 44.4248Z"
                    fill="#323232"
                />
                <path
                    d="M70.9368 20.8237L66.045 24.765L65.7289 25.0184L65.7237 25.0236L65.4076 25.277L64.765 25.7943L43.0523 43.2508C43.0782 43.0697 43.0938 42.8887 43.1093 42.7077C43.1249 42.5318 43.1352 42.3611 43.1404 42.1853V42.1801C43.1456 42.0249 43.1508 41.8698 43.1508 41.7094C43.1508 39.6146 42.6118 37.7009 41.648 36.1337C41.5806 36.0251 41.5081 35.9165 41.4407 35.813V35.8078C41.363 35.6992 41.2904 35.5958 41.2127 35.4923C41.135 35.3889 41.0572 35.2854 40.9691 35.182C40.8914 35.0785 40.8033 34.9751 40.71 34.8768C40.5805 34.7217 40.4406 34.5768 40.2955 34.4372L40.4043 34.1475L41.0417 32.4303L67.185 4.7327C67.755 4.13271 68.351 3.83789 68.8899 3.83789C69.6724 3.83789 70.3357 4.45339 70.6259 5.61716L72.9422 14.9118C73.5537 17.4927 73.0459 19.1324 70.9368 20.8237Z"
                    fill="#323232"
                />
                <path
                    d="M37.3313 14.9842L36.1654 32.182C36.041 32.151 35.9115 32.1251 35.7819 32.1045C35.6575 32.0786 35.528 32.0579 35.3933 32.0424C34.958 31.9751 34.5071 31.9441 34.0459 31.9441H27.3611L24.9826 8.1257C24.8375 6.67229 25.48 5.80334 26.5372 5.80334C26.9414 5.80334 27.4026 5.93265 27.9052 6.20161L34.419 9.75498L34.7766 9.95152H34.7818L35.1393 10.1481C35.2637 10.2153 35.3829 10.2929 35.4917 10.3653C35.6161 10.4481 35.7301 10.536 35.8389 10.6291C37.0411 11.6377 37.4453 13.148 37.3313 14.9842Z"
                    fill="#323232"
                />
                <path
                    d="M47.6021 12.5014L40.3628 32.0165L40.0208 32.9423L39.6736 33.8785C39.57 33.7958 39.4715 33.7182 39.3627 33.6406C39.259 33.563 39.1502 33.4854 39.0414 33.4182C38.3988 32.9889 37.6889 32.6423 36.9323 32.3992L36.9427 32.2337L38.1086 15.0359C38.2537 12.6256 37.549 10.8618 35.9996 9.77563L36.0047 9.73943L35.5643 9.5015C35.5487 9.48599 35.5332 9.48081 35.5176 9.47047H35.5124L35.2896 9.34633L36.7043 1.87754C36.9323 0.656881 37.6008 0 38.4247 0C38.9429 0 39.5233 0.258615 40.0985 0.796533L46.1771 6.4964C48.0322 8.23946 48.4831 10.1222 47.6021 12.5014Z"
                    fill="#323232"
                />
                <path
                    d="M35.5124 9.47045L35.2896 9.35149V9.34631L35.5124 9.47045Z"
                    fill="#323232"
                />
                <path
                    d="M36.0047 9.73939L35.9996 9.7756C35.8648 9.67732 35.7197 9.58422 35.5643 9.50146L36.0047 9.73939Z"
                    fill="#323232"
                />
                <path
                    d="M35.5643 9.50146C35.7197 9.58422 35.8648 9.67732 35.9996 9.7756L36.0047 9.73939L35.5643 9.50146Z"
                    fill="#323232"
                />
                <path
                    d="M35.2896 9.34631V9.35149L35.5124 9.47045L35.2896 9.34631Z"
                    fill="#323232"
                />
            </g>
            <defs>
                <clipPath id="clip0_20_97">
                    <rect width="79" height="74" fill="white" />
                </clipPath>
            </defs>
        </SVG>
    );
};

export { Arrow, Plus, Send, DguLogo };
