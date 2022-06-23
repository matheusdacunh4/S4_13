import pkg from "pg";
const { Client } = pkg;

const database = new Client({
  user: "mathe",
  host: "localhost",
  database: "atvdd_logic",
  password: "77644Gg0",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
