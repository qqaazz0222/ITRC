

const useGoto = const useGoto = (setState = () => {}, url = "") => {
    const navigate = useNavigate();
    setState(true);
    setTimeout(() => {
        navigate(url);
    }, 1250);
};

export default useGoto;
