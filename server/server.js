
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("LeadDesk Mini Backend is Running 🚀");
});
app.post("/api/leads", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Lead received successfully!",
    data: req.body,
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});