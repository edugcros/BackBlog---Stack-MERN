const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: new Date
        },
        cod: {
            type: String,
            required: true
        },
        client: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        condition: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Note', noteSchema);