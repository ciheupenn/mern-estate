import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=2400&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308",
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;