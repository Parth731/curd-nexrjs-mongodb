import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    dateOfBirth: {
        type: String,
        require: true,

    },

}, { timestamps: true, timeseries: true })

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;