import { CommentDTO } from "../types/comment.type";

const API_URL = import.meta.env.VITE_API_URL;

export const findManyByTravelId = async (id: number) => {
  const response = await fetch(`${API_URL}/comments/travels/${id}`);
  return await response.json();
};

export const create = async (credentials: CommentDTO) => {
  const response = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return await response.json();
};
