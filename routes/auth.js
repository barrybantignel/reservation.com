import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.json("Hi, initialisation auth par bbaryy")
})
export default router