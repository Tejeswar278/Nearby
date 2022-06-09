const express = require("express");
const restaurent = require("../model/restaurent");

const Restaurent = require("../models/restaurent");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const restaurents = await Restaurent.find({ location: { $near: { $geometry: { type: "Point", coordinates: [ 77.57902753891177,12.963268283597573] } }
    }}).lean().exec();
        res.status(200).send(restaurents)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post("/create", async (req,res) => {
    try {
        const restaurant = await Restaurent.create(req.body);
        return res.status(200).send(restaurent)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id", async (req,res) => {
    try {
        const restaurant = await Restaurent.findByIdAndUpdate(req.params.id, req.body, {new :true}); 
        return res.status(200).send(restaurent)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const restaurent = await Restaurent.findByIdAndDelete(req.params.id); 
        return res.status(200).send(restaurent);
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;