// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const TechAndServicePage = () => {
    return (
        <div id="TechAndServicePage" className="page">
            <div className="pageInfo">
                <div className="pageName">기술과 서비스</div>
                <div className="pageSlogan">
                    <p>동국대학교 연구진들이 개발한</p>
                    <p>인공지능 모델을 소개합니다.</p>
                </div>
            </div>
            <div className="newsContainer"></div>
        </div>
    );
};
export default TechAndServicePage;
