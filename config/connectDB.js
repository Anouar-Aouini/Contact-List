const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://anouar:anouar321@cluster0.flcdv.mongodb.net/test?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("connected to the database");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;