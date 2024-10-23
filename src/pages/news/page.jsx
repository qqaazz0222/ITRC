// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const NewsPage = () => {
    return (
        <div id="NewsPage" className="page">
            <div className="pageInfo">
                <div className="pageName">뉴스</div>
                <div className="pageSlogan">
                    <p>노인 복지 관련 새로운 소식과</p>
                    <p>인사이트를 만나보세요.</p>
                </div>
            </div>
            <div className="newsContainer"></div>
        </div>
    );
};
export default NewsPage;
