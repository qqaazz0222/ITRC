const NullCheck = (n) => {
    if (n === "" || n === undefined || n === null) {
        return false;
    }
    return true;
};

export default NullCheck;
