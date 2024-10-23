// 라이브러리
import { Outlet } from "react-router-dom";
// 컴포넌트
import Header from "@/components/header/component";
import Footer from "@/components/footer/component";
// 스타일
import "./style.css";

const RootLayout = () => {
    return (
        <div id="RootLayout">
            <div id="HeaderContainer">
                <Header />
            </div>
            <div id="ContentContainer">
                <Outlet />
            </div>
            <div id="FooterContainer">
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;
