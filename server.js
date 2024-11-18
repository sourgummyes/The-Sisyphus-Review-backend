const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const reviewsRouter = require("./controllers/reviews.js");
const booksRouter = require("./controllers/books.js");
const usersRouter = require("./controllers/users");
const profilesRouter = require("./controllers/profiles");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(cors());
app.use("/reviews", reviewsRouter);
app.use("/books", booksRouter);
app.use("/users", usersRouter);
app.use("/profiles", profilesRouter);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
