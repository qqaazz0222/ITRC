// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const IntroductionPage = () => {
    return (
        <div id="IntroductionPage" className="page">
            <div className="pageInfo">
                <div className="pageName">소개</div>
                <div className="pageSlogan">
                    <p>ITRC-KSCS를</p>
                    <p>소개합니다.</p>
                </div>
            </div>
            <div className="newsContainer"></div>
        </div>
    );
};
export default IntroductionPage;
