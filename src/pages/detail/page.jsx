// 라이브러리
import { useOutletContext } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
// 스타일

const DetailPage = () => {
    const { pageOutHandler } = useOutletContext();
    return (
        <div id="detailPage" className="page">
            <button onClick={() => pageOutHandler("/")}>asdasd</button>
        </div>
    );
};

export default DetailPage;
