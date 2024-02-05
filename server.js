const express = require("express");

const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv").config();
const { DataSource } = require("typeorm");

const myDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

myDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});

const PORT = 3000;
const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// Health check
app.get("/ping", (req, res) => {
  const html = "<h2>Hello</h2>";
  res
    .status(200)
    .json({ html, message: "EC2 RDS 연결 후 docker container로 실행완료우" });
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      `Server is listening on ${PORT}`;
    });
  } catch (err) {
    console.log(err);
  }
};
console.log("test");

start();
