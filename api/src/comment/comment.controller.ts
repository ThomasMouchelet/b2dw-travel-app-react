import { Router } from "express";
import CommentService from "./comment.service";

const CommentController = Router();

CommentController.get("/", CommentService.getAll);
CommentController.post("/", CommentService.create);
CommentController.get("/:id", CommentService.getOne);
CommentController.get("/travels/:id", CommentService.getManyByTravelId);

export default CommentController;
