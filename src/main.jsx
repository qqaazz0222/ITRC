// 라이브러리
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 서비스
// 레이아웃
import LandingLayout from "./layouts/landingLayout/layout";
import DetailLayout from "./layouts/detailLayout/layout";
// 페이지
import LandingPage from "./pages/landing/page";
import DetailPage from "./pages/detail/page";
import ErrorPage from "./pages/error/page";
// 스타일
import "./index.css";
import "./custom.css";
import { AnimatePresence } from "framer-motion";

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
        element: <DetailLayout />,
        children: [
            {
                path: "/detail",
                element: <DetailPage />,
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
