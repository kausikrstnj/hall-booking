const BookRoom = require("../models/bookRoomModel");


// Get booked rooms
exports.getBookedRooms = async (req, res) => {
    try {
        const rooms = await BookRoom.find({ bookedStatus: true });
        res.render("index", { rooms });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


// Book a room
exports.bookRoom = async (req, res) => {
    try {
        console.log("Book Room data :", req.body);
        await BookRoom.create(req.body);
        res.status(201).send("Room Booked Successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};