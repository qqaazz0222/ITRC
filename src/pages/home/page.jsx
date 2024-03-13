// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
import Loading from "@/components/loading/component";
// 아이콘
// 스타일
import "./style.css";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const GridCellOption =
        "w-full h-full min-w-64 min-h-48 bg-slate-50 border-slate-200 border rounded-xl ";
    useEffect(() => {
        console.log(isLoading);
        setIsLoading(false);
    }, []);
    return (
        <>
            <div
                id="homePage"
                className="page flex flex-col items-center justify-center w-svw h-svh"
            >
                <div className="grid gap-2 grid-cols-4 ">
                    <div className={GridCellOption + "col-span-2"}>1</div>
                    <div className={GridCellOption}>2</div>
                    <div className={GridCellOption}>3</div>
                    <div className={GridCellOption}>3</div>
                    <div className={GridCellOption}>3</div>
                    <div className={GridCellOption}>3</div>
                </div>
            </div>
            <Loading isLoading={isLoading} />
        </>
    );
};

export default HomePage;
