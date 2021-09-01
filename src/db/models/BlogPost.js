import mongoose from "mongoose";

const { Schema, model } = mongoose

const blogPostSchema = new Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String, required: true },
    readTime: {
        value: { type: Number, required: true },
        unit: { type: String, required: true }
    },
    author: {
        name: { type: String, required: true },
        avatar: { type: String, required: true },
    },
    content: { type: String, required: true },
    blogComments: [{
        comment: String,
        rate: Number,
    }]
}, {
    timestamps: true
})

export default model('BlogPost', blogPostSchema)