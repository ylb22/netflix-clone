import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DB_URL);

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
