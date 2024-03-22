const express = require("express");
const router = express.Router();
const db = require("./../bin/commentDB");

router.get("/", async (req, res, next) => {
    try {
        const response = await db.query("SELECT * FROM commentTable;");
        console.log(response);
        return res.json({ status: 200, msg: "Connected to Database" });
    } catch (error) {
        return res.json({
            status: 400,
            msg: "Unable to connect to Database",
            err: error,
        });
    }
});

router.get("/latest/:limit", async (req, res, next) => {
    const { limit } = req.params;
    try {
        let response = null;
        if (limit === "all") {
            response = await db.query(
                "SELECT * FROM commentTable ORDER BY id DESC;"
            );
        } else {
            response = await db.query(
                "SELECT * FROM commentTable ORDER BY id DESC LIMIT ?;",
                [parseInt(limit)]
            );
        }
        return res.json([response[0]]);
    } catch (error) {
        return res.json({ status: 400, msg: "조회 실패", err: error });
    }
});

router.post("/create", async (req, res, next) => {
    const { nickname, context } = req.body;
    try {
        const response = await db.query(
            "INSERT INTO commentTable (nickname, context) VALUE (?, ?);",
            [nickname, context]
        );
        return res.json({ status: 200, msg: "등록 성공" });
    } catch (error) {
        console.log(error);
        return res.json({ status: 400, msg: "등록 실패", err: error });
    }
});

module.exports = router;
