// 라이브러리
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
import {
    DropdownNav,
    DropdownNavContent,
    DropdownNavItem,
    DropdownNavLabel,
    DropdownNavSeparator,
    DropdownNavTrigger,
} from "@/components/ui/dropdown-nav";
// 아이콘
import Home from "@/assets/icons/ico_home.png";
// 스타일
import "./style.css";

// eslint-disable-next-line react/prop-types
const Header = ({
    title = "",
    step1 = { seleted: "", list: [] },
    step2 = { seleted: "", list: [] },
    step3 = { seleted: "", list: [] },
}) => {
    const navigate = useNavigate();
    return (
        <div id="header">
            <div className="titleWrap">{title}</div>
            <div className="navBarWrap">
                <div
                    className="navHome"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <img src={Home} alt="홈" />
                </div>
                {step1.list.length > 0 && <NavTab tabData={step1} />}
                {step2.list.length > 0 && <NavTab tabData={step2} />}
                {step3.list.length > 0 && <NavTab tabData={step3} />}
            </div>
        </div>
    );
};

const NavTab = ({ tabData = { seleted: "", list: [] } }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navTab">
            <DropdownNav>
                <DropdownNavTrigger>{tabData.seleted}</DropdownNavTrigger>
                <DropdownNavContent>
                    <DropdownNavLabel>My Account</DropdownNavLabel>
                    <DropdownNavSeparator />
                    <DropdownNavItem>Profile</DropdownNavItem>
                    <DropdownNavItem>Billing</DropdownNavItem>
                    <DropdownNavItem>Team</DropdownNavItem>
                    <DropdownNavItem>Subscription</DropdownNavItem>
                </DropdownNavContent>
            </DropdownNav>
            {/* <div className="navTabListWrap">
                {tabData.list.map((item, idx) => (
                    <a href="#" key={`navTabItem${idx}`}>
                        {item}
                    </a>
                ))}
            </div> */}
        </div>
    );
};

export default Header;
