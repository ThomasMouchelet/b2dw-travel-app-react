import { Request, Response } from "express";
import connection from "../config/database.config";
import { ResultSetHeader } from "mysql2";

const getAll = async (req: Request, res: Response) => {
  connection.query("SELECT * FROM comment", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
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
  const { pseudo, content } = req.body;

  const sql = "INSERT INTO comment (pseudo, content) VALUES (?, ?)";
  const values = [pseudo, content];

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
    });
  });
};

export default {
  getAll,
  getOne,
  create,
};
