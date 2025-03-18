import mongoose from "mongoose";

const mongoDBCred = process.env.MONGO_DB_URI || "";

const dbConnect = async () => {
  await mongoose.connect(mongoDBCred);
  return mongoose;
};

export default dbConnect;
