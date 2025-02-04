import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export const item = mongoose.model("item", itemSchema)