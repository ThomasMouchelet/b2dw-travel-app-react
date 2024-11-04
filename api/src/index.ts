import express, { Request, Response } from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Connection to the mysql database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "travel_app",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello !");
});

// Get all travels (app.get) (/travels)
app.get("/travels", (req: Request, res: Response) => {
  connection.query("SELECT * from travel", function (error, results) {
    if (error) {
      res.status(500).send({ error: "Error while fetching data" });
      return;
    }

    res.status(200).send(results);
  });
});

// Get One travel (app.get) (/travels/:id)
app.get("/travels/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("end point get one (id): ", id);

  const sql = "SELECT * FROM travel WHERE id = ?";
  const values = [id];
  connection.query(sql, values, (error, results) => {
    if (error) {
      res.status(500).send({ error: "Error while fetching data" });
      return;
    }

    if (Array.isArray(results) && results.length === 0) {
      res.status(404).send({ error: "Travel not found" });
      return;
    }

    if (Array.isArray(results) && results.length === 1) {
      res.status(200).send(results[0]);
      return;
    }
  });
});

// Create travel (app.post) (/travels)
app.post("/travels", (req: Request, res: Response) => {
  res.send("create");
});

// Update travel (app.put) (/travels/:id)
app.put("/travels/:id", (req: Request, res: Response) => {
  res.send("update");
});

// Delete travel (app.delete) (/travels/:id)
app.delete("/travels/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("end point delete (id): ", id);

  const sqlDelete = "DELETE FROM travel WHERE id = ?";
  const sqlSelect = "SELECT * FROM travel WHERE id = ?";
  const values = [id];

  // Vérifier si l'id existe dans la base de données
  connection.query(sqlSelect, values, (error, results) => {
    if (error) {
      res.status(500).send({ error: "Error while fetching data" });
      return;
    }
    if (Array.isArray(results) && results.length === 0) {
      res.status(404).send({ error: "Travel not found" });
      return;
    }
  });

  // Si l'id existe, on peut supprimer
  connection.query(sqlDelete, values, (error, results) => {
    if (error) {
      res.status(500).send({ error: "Error while fetching data" });
      return;
    }

    console.log("results", results);

    res.status(200).send({ message: "Success to delete" });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
