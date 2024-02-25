const CreateRoom = require("../models/createRoomModel");


// Get all rooms
exports.getRooms = async (req, res) => {
    try {
        // const rooms = await CreateRoom.find();
        // res.render("index", { rooms });
        let results = await CreateRoom.find();
        res.render("index", { results });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        await CreateRoom.create(req.body);
        let results = await CreateRoom.find();
        res.render("index", { results });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// Delete a room
exports.deleteRoom = async (req, res) => {
    try {
        await CreateRoom.findByIdAndDelete(req.params.id);
        console.log('delete Room params id :', req.params.id)
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


// List all customers with booked data
exports.getCustomerWithBookedRooms = async (req, res) => {
    try {
        let results = await CreateRoom.find({ bookedStatus: true });
        res.render("customersWithBookedRooms", { results });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};