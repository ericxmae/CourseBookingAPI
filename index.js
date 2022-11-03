
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.js")
const courseRoutes = require("./routes/course.js")

const app = express();

// db connection
mongoose.connect("mongodb+srv://admin:admin123@zuitt.w87b5cj.mongodb.net/Course-Booking-API?retryWrites=true&w=majority", {
	useNewUrlParser: true, 
	useUnifiedTopology: true
});
// prompts message in the terminal once connection is open:
mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas"));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Initializing the routes
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

app.listen(process.env.PORT || 4000, () =>{
	console.log(`API is now online on port ${process.env.PORT || 4000}`);
})
// process.env port - working website link