const express = require("express");
const router = express.Router();
const Contact = require("../models/contacts");

router.get("/", (req, res) => {
    res.send("hello routing");
});
router.post("/", async (req, res) => {
    try {
        //create new contact with the model contact
        const newContact = new Contact(req.body);
        // test if user exist
        const findUser = await Contact.findOne({ email: req.body.email });
        if (findUser) {
            return res.status(400).send({
                errors: [{ msg: "email should be unique" }],
            });
        }
        // save the user to the data base
        await newContact.save();
        res.status(200).send({
            msg: "new contact is added successfully",
            user: newContact,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "user didn't register" }] });
    }
});
router.get("/all", async (req, res) => {
    try {
        const users = await Contact.find();
        res.status(200).send({ contacts: users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "cannot find any contact" });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const user = await Contact.findOne({ _id: req.params.id });
        res.status(200).send({ contacts: user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "cannot find any contact" });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const user = await Contact.deleteOne({ _id: req.params.id });
        res.status(200).send("deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "cannot find any contact" });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const user = await Contact.updateOne(
            { _id: req.params.id },
            { $set: { ...req.body } }
        );
        res.status(200).send("updated");
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "cannot find any contact" });
    }
});

module.exports = router;