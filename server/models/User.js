const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  role: {
  type: String,
    enum: ['student', 'recruiter', 'admin'], // Define the allowed values here
    required: [true, "Role is required"],
    
  },
  password: {
    type: String,
    required: [true, "Password is required"],

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
