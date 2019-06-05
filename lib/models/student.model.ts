import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
  name: {
    first_name: { type: String },
    last_name: { type: String },
    middle_name: { type: String },
  },
  student_username: {
    type: String,
  },
});
