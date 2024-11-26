import { Request, Response } from "express";
import connection from "../config/database.config";
import { ResultSetHeader } from "mysql2";

const getAll = async (req: Request, res: Response) => {
  connection.query(
    "SELECT * FROM comment ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json(results);
    }
  );
};

const getManyByTravelId = async (req: Request, res: Response) => {
  console.log("end point get many by travel id: ", req.params.id);
  const sql = "SELECT * FROM comment WHERE travel_id = ?";
  connection.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
    return;
  });
};

const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("end point get one (id): ", id);

  connection.query(
    "SELECT * FROM comment WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      if (Array.isArray(results) && results.length === 0) {
        res.status(404).send({ error: "Comment not found" });
        return;
      }

      if (Array.isArray(results) && results.length >= 1) {
        res.json(results[0]);
        return;
      }
    }
  );
};

const create = async (req: Request, res: Response) => {
  console.log(req.body);
  const { pseudo, content, travel_id } = req.body;

  const sql =
    "INSERT INTO comment (pseudo, content, travel_id) VALUES (?, ?, ?)";
  const values = [pseudo, content, travel_id];

  connection.query(sql, values, (err, results: ResultSetHeader) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res.json({
      id: results.insertId,
      pseudo,
      content,
      travel_id,
    });
  });
};

export default {
  getAll,
  getOne,
  create,
  getManyByTravelId,
};
