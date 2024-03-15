// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const PageIn = ({ animation = "" }) => {
    return (
        <div className={`pageIn ${animation}`}>
            <div className="slide slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>
        </div>
    );
};

export default PageIn;
