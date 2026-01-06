const expresss = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = expresss();

app.use(cors());
app.use(expresss.json());

app.use(expresss.static(path.join(__dirname, "./client/dist")));

app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get((req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
