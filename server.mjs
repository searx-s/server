import express from "express";

const app = express();
const port = 443;

app.get('/', (req, res) => {
  res.send('Welcome to Searx.s`s Node.js Server');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
