const mongoose = require("mongoose");

const bookRoomSchema = new mongoose.Schema({
    roomId: Number,
    date: String,
    customerName: String,
    startTime: String,
    endTime: String,
    bookedStatus: false,
});

module.exports = mongoose.model("BookRoom", bookRoomSchema);