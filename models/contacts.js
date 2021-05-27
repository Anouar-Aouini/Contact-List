const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    adress: {
        type: String,
    },
});
module.exports = Contact = model("contact", contactSchema);