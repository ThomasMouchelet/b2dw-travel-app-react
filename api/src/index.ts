import express, { Request, Response } from "express";
import cors from "cors";
import CommentController from "./comment/comment.controller";
import TravelController from "./travel/travel.controller";

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello !");
});

app.use("/comments", CommentController);
app.use("/travels", TravelController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
