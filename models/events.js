const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema({
    ImageUrl:{
        type: String
    },
    Description:{
        type: String
    },
    Date:{
        type: String
    },
    Time:{
        type: String
    },
    Seats:{
        type: String
    },
    Price:{
        type: String
    }
});

module.exports = mongoose.model('event', Event);

