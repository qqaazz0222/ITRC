// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const StoryPage = () => {
    return (
        <div id="StoryPage" className="page">
            <div className="pageInfo">
                <div className="pageName">이야기</div>
                <div className="pageSlogan">
                    <p>동국대학교 ITRC 프로젝트의</p>
                    <p>스토리를 소개합니다.</p>
                </div>
            </div>
            <div className="newsContainer"></div>
        </div>
    );
};
export default StoryPage;
