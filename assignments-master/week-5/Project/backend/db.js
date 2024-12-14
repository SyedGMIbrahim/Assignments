const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://syedgibrahim:Jaleel%4029042004@cluster0.0xd4x.mongodb.net/");

const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    social: Object
});

const card = mongoose.model("cards", cardSchema);

module.exports = {
    card
}