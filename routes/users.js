import express from "express";
import { log } from "console";


const usersRouter = express.Router();

usersRouter.post('/login', (req, res) => {
    res.send("login")
})

usersRouter.post("/signup", (req, res) => {
    res.send("signup");
});

export default usersRouter;