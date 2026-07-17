import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Classroom Backend!");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
