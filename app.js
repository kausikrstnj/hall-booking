const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const createRoomController = require("./controllers/createRoomController");
const bookRoomController = require("./controllers/bookRoomController");

const app = express();
const ejs = require('ejs');
require("dotenv").config();

const DB_URL = process.env.DB_URL;

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(bodyParser.json());

// Routes
app.get("/bookedRooms", bookRoomController.getBookedRooms);
app.get("/rooms", createRoomController.getRooms);
app.post("/createRoom", createRoomController.createRoom); //Done
app.post("/bookRoom", bookRoomController.bookRoom);







const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
