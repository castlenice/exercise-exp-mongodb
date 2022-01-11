import "dotenv/config.js";
import express from "express";
import "./db/client.js"
import users from "./routes/users.js";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/users", users); //middleware

app.get("/", (req, res) => {
  res.send("<h1>Hallo</h1>");
});

app.listen(port, () => console.log(`Server hoert an port ${port}`));