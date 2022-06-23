import { startDatabase } from "./database/index.js";
import database from "./database/index.js";
import bcrypt from "bcrypt";

import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

app.post("/users/signup", async (request, response) => {
  const { email, name, password } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const res = await database.query(
      "INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING *",
      [email, name, hashedPassword]
    );
    return response.status(201).json(res.rows[0]);
  } catch (err) {
    return response.status(400).json(err.message);
  }
});

app.listen(PORT, () => {
  startDatabase();
  console.log("rodando");
});
