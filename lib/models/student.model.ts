import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
  addresses: [
    {
      city: { type: String },
      complement: { type: String },
      neighborhood: { type: String },
      number: { type: Number },
      postal_code: { type: Number },
      state: { type: String },
      street: { type: String },
    },
  ],
  alerts: [
    {
      description: { type: String },
      expires_date: { type: String },
      type: { type: String },
    },
  ],
  demographics: {
    birth_date: { type: Date },
    gender: { type: String },
    projected_graduation_year: { type: Number },
  },
  name: {
    first_name: { type: String },
    last_name: { type: String },
    middle_name: { type: String },
  },
  student_username: { type: String },
});
