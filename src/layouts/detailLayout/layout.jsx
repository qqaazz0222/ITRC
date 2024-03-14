import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@/components/sidebar/component";
import "./style.css";
import Header from "@/components/header/component";

const DetailLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="detailLayout">
            <SideBar onActivate={isOpen} />
            <div id="mainSection">
                <Header
                    title="대학안내"
                    step1={{
                        seleted: "스탭1",
                        list: ["스탭1", "스탭1", "스탭1"],
                    }}
                    step2={{
                        seleted: "스탭2",
                        list: ["스탭2", "스탭2", "스탭2"],
                    }}
                    step3={{
                        seleted: "스탭3",
                        list: [],
                    }}
                />
                <div id="contentSection">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DetailLayout;
