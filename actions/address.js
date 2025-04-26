import connectDB from "@/config/db";
import Address from "@/models/address";

export const addAddress = async (address, userId) => {
  try {
    await connectDB();
    const newAddress = await Address.create({ ...address, userId });
    return newAddress;
  } catch (error) {
    console.log("Error updating address", error);
    return {};
  }
};

export const getAddress = async (userId) => {
  console.log("Getting address", userId);
  try {
    await connectDB();
    const address = await Address.find({userId}).exec();
    return address;
  } catch (error) {
    console.log("Error updating address", error);
    return {};
  }
};
