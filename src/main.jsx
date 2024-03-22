// 라이브러리
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// 서비스
// 레이아웃
import LandingLayout from "./layouts/landingLayout/layout";
import ModelLayout from "./layouts/modelLayout/layout";
import DemoLayout from "./layouts/demoLayout/layout";
// 페이지
import LandingPage from "./pages/landing/page";
import ModelPage from "./pages/model/page";
import DemoNiaPage from "./pages/demo/niaPage";
import DemoRobustPage from "./pages/demo/robustPage";
import ErrorPage from "./pages/error/page";
// 스타일
import "./index.css";
import "./custom.css";

const router = createBrowserRouter([
    {
        element: <LandingLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
        ],
    },
    {
        element: <ModelLayout />,
        children: [
            {
                path: "/model/nia",
                element: <ModelPage project={"nia"} />,
            },
            {
                path: "/model/robustqa",
                element: <ModelPage project={"robustqa"} />,
            },
            {
                path: "/model/deepscan",
                element: <ModelPage project={"deepscan"} />,
            },
        ],
    },
    {
        element: <DemoLayout />,
        children: [
            {
                path: "/demo/nia",
                element: <DemoNiaPage />,
            },
            {
                path: "/demo/robustqa",
                element: <DemoRobustPage />,
            },
            {
                path: "/demo/deepscan",
                element: <></>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <AnimatePresence>
        <RouterProvider router={router} />
    </AnimatePresence>
);
