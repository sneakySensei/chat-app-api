const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
  ],
});

// {
//         chatId: {
//             type: Schema.Types.ObjectId,
//             ref: "Chat",
//             required: true
//         }
//     }

module.exports = mongoose.model("User", userSchema);
