 const mongoose = require("mongoose");

const MongoDbUrl =
  "mongodb+srv://zeeshan1361:Zeeshan1234@free-cluster.md9hfyh.mongodb.net/jobBoard?retryWrites=true&w=majority";

exports.connectDB = async () => {
  try {
    await mongoose.connect(MongoDbUrl);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};


