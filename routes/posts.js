import express from "express";
import { log } from "console";

const postsRouter = express.Router();

postsRouter
  .route("/") // The middleware will be '/posts' & then Route '/'
  .get((req, res) => {
    res.send("all posts"); // GET all posts
  })
  .post((req, res) => {
    res.send("create post"); // CREATE post
  });

postsRouter
  .route("/:id") // Route '/:id' important to note that :id is just a placeholder (create it by adding  a ':' at the start) it's also just a variable that's value will change ...
  .get((req, res) => {
    res.send("one post"); // GET all posts
  })
  .put((req, res) => {
    res.send("update post"); // UPDATE post
  })
   .delete((req, res) => {
    res.send("delete post"); // DELETE post
  });


export default postsRouter;
