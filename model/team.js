const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamDetails: {
    image: String,
    Name: String,
    Team: String,
  },
  playerId: {
    type: Schema.Types.ObjectId,
    ref: "Player",
  },
});

module.exports = mongoose.model("Team", teamSchema);
