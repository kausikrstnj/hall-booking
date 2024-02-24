const mongoose = require("mongoose");

const createRoomSchema = new mongoose.Schema({
    roomId: Number,
    roomName: String,
    numberOfSeatsAvailable: Number,
    amenities: [String],
    pricePerHr: Number,
    bookedStatus: Boolean,
    customerDetails: {
        customerName: String,
        date: String,
        starTime: String,
        endTime: String
    }
});

module.exports = mongoose.model("CreateRoom", createRoomSchema);