const mysql2 = require("mysql2/promise");
require("dotenv").config();
const { COMMENT_DB_DATABASE } = process.env;
console.log(COMMENT_DB_DATABASE);

const options = {
    host: process.env.COMMENT_DB_HOST || "43.201.84.138",
    port: process.env.COMMENT_DB_PORT || 3306,
    user: process.env.COMMENT_DB_USER || "user",
    password: process.env.COMMENT_DB_PASSWORD || "0000",
    database: process.env.COMMENT_DB_DATABASE || "comment",
};
const db = mysql2.createPool({
    host: options.host,
    port: options.port,
    user: options.user,
    password: options.password,
    database: options.database,
    timezone: "Asia/Seoul",
    dateStrings: true,
});
module.exports = db;
