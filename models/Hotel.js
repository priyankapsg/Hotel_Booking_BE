import mongoose from "mongoose";


const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
},
{ timestamps: true }

);

export default mongoose.model("Hotel", HotelSchema);
