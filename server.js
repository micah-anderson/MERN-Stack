import express from 'express';
import { log } from 'console';
import usersRouter from './routes/users.js';
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 8888

app.use(express.json()) // Should always be before routes b/c you need to append it first
app.use('/auth', usersRouter);
app.use("/posts", postsRouter);

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, (req, res) => {
    log(`SERVER IS UP & RUNNING ON http://localhost:${PORT}`)
}) 