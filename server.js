const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");

//Connect Database

connectDB();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API running");
});

//Define Routes

app.use("/api/users", require("./routes/api/users")); //RESTFULL
app.use("/api/auth", require("./routes/api/auth")); //RESTFULL
app.use("/api/profile", require("./routes/api/profile")); //RESTFULL
app.use("/api/posts", require("./routes/api/posts")); //RESTFULL

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER started on PORT ${PORT}`));
