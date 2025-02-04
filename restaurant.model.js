import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item"
    }]
})

export const restaurant = mongoose.model("restaurant", restaurantSchema)