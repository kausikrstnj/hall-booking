const BookRoom = require("../models/bookRoomModel");
const CreateRoom = require("../models/createRoomModel");


// Get booked rooms
exports.getBookedRooms = async (req, res) => {
    try {
        const rooms = await CreateRoom.find({ bookedStatus: true });
        res.render("bookedRooms", { rooms });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


// Book a room
exports.bookRoom = async (req, res) => {
    try {
        const roomData = await CreateRoom.find({ _id: req.params.id });
        res.render("bookRoom", { roomData });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


// Book room from add page
exports.book = async (req, res) => {
    try {
        const { roomId, customerName, date, startTime, endTime } = req.body;
        let exist = await CreateRoom.find({ roomId: roomId });
        if (exist.length > 0 && !exist[0].bookedStatus) {
            await CreateRoom.findOneAndUpdate({ roomId: roomId }, {
                $set: {
                    bookedStatus: true,
                    customerDetails: {
                        customerName: customerName,
                        date: date,
                        startTime: startTime,
                        endTime: endTime,
                    }
                }
            });
            res.redirect("/");
        }
        else {
            res.send("Room is already booked.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};