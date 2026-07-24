
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();


const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/leads", leadRoutes);

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;



app.get("/", (req, res) => {
    res.send("LeadDesk Mini Backend is Running 🚀");
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});