const CreateRoom = require("../models/createRoomModel");


// Get all rooms
exports.getRooms = async (req, res) => {
    try {
        const rooms = await CreateRoom.find();
        res.render("index", { rooms });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        console.log("Create Room data :", req.body);
        let currentRoomId = req.body.roomId;
        await CreateRoom.create(req.body);
        let results = await CreateRoom.find({ roomId: req.body.roomId });
        res.render("index", { results });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
