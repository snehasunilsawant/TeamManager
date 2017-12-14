const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    position: { type: String, required: true },    
    game1Status: { type: String , default:'undecided' },
    game2Status: { type: String , default:'undecided'},
    game3Status: { type: String, default:'undecided'},
}, { timestamps: true })


mongoose.model("Player", PlayerSchema)
