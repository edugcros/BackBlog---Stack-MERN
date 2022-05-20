const { Schema, model } = require('mongoose');

const calendarSchema = new Schema(
    {
        start: {
            type: Date,
        },
        end: {
            type: Date,
        },
        title: {
            type: String
        },
    },
    {
        timestamps: true
    }
);

module.exports = model('Calendar', calendarSchema);