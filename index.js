//require express
const express = require("express");
const axios = require("axios");
const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/api/news", async (req, res) => {
  const apiCall = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=${req.query.category}&country=in&apiKey=50431c5b15f84f16babb377b1eca617c`
  );
  res.json(apiCall.data.articles);
});

app.listen(5000, () => {
  console.log("object");
});
