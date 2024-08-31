import express from "express";
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!, for vercel ");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
