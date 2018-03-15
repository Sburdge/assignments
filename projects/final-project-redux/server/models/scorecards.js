const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scorecardSchema = ({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Scorecards", scorecardSchema);
