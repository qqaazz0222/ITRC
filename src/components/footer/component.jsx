// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
import Logo from "@/assets/FooterLogo.svg";
// 스타일
import "./style.css";

const Footer = () => {
    return (
        <div id="Footer">
            <div className="logoWrap">
                <img src={Logo} alt="" srcset="" />
            </div>
            <div className="infoWrap">
                <div className="infoItem">
                    <p>04620 서울특별시 중구 필동로 1길 30 동국대학교</p>
                </div>
                <div className="infoItem">
                    <p>T : 02-2290-1415</p>
                    <p>E : qqaazz0222@dgu.ac.kr</p>
                </div>
                <div className="infoItem">
                    <p>
                        Copyright(c) 2024 DONGGUK UNIVERSITY. ALL RIGHTS
                        RESERVED.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
