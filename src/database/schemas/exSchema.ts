import mongoose from "mongoose";

export type EX = {
  _id: string;
};

const exSchema = new mongoose.Schema<EX>(
  {
    _id: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ex", exSchema);
