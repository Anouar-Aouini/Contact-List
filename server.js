const express = require("express");
const app = express();
app.use(express.json());
const connectDB = require("./config/connectDB");
// database connection
connectDB();
// PORT
const PORT = 5000;
// routes
const contactRoute = require("./routes/Contacts");
app.use("/api/contact", contactRoute);
// create server
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`server is connected on port ${PORT}`);
});