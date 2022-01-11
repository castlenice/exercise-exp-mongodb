import mongoose from "mongoose";
const { Schema, model } = mongoose; //model-methode = das ist mein model mit dem ich arbeiten moechte

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number },
});

export default model("User", userSchema);
