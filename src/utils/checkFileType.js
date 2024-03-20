const checkAllowFileType = (fileType, fileName) => {
    const allowFileName = [".hwpx"];
    if (!fileType) {
        const fileExt = fileName.substring(fileName.lastIndexOf("."));
        return allowFileName.includes(fileExt);
    }
    const allowFileTypes = ["image/jpg", "image/png", "image/jpeg"];
    return allowFileTypes.includes(fileType);
};

export { checkAllowFileType };
