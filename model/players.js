const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  userData: new Schema({
    code: {
      type: String,
      required: true,
    },
  }),
  playerData: new Schema({
    playerName: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    isPlaying: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  }),
  teamId: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Player", playerSchema);
