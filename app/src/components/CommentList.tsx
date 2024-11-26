import { useEffect, useState } from "react";
import { CommentType } from "../types/comment.type";
import { findManyByTravelId } from "../services/comment.service";
import CommentShowItem from "./CommentShowItem";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const { id } = useParams();
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    fetAllComments();
  }, []);

  const fetAllComments = async () => {
    try {
      const data = await findManyByTravelId(Number(id));
      setComments(data);
    } catch (error) {
      console.log("Error to fetch comments", error);
    }
  };

  return comments.map((comment) => (
    <CommentShowItem comment={comment} key={comment.id} />
  ));
};

export default CommentList;
