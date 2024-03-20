// 라이브러리
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
// 서비스
// 컴포넌트
// 아이콘
// 스타일

const Timer = ({ setTime }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        var time = 0;
        const interval = setInterval(() => {
            time = time + 1;
            setSeconds((seconds) => seconds + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
            setTime(time);
        };
    }, []);

    return <span>{seconds}초</span>;
};
Timer.propTypes = {
    setTime: PropTypes.func.isRequired,
};

export default Timer;
