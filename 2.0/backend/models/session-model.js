const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sessionSchema = new Schema({
    pid: String

});
const session = mongoose.model("session", sessionSchema);
module.exports = session;
