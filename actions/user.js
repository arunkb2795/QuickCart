import connectDB from "@/config/db";
import User from "@/models/user";

export const createUser = async (
  id,
  first_name,
  last_name,
  email_addresses,
  image_url
) => {
  try {
    const userData = {
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0].email_address,
      imageUrl: image_url,
      cartItems: {},
    };
    await connectDB();
    await User.create(userData);
  } catch (error) {
    console.log("Error creating user", error);
  }
};

export const updateUser = async (
  id,
  first_name,
  last_name,
  email_addresses,
  image_url
) => {
  try {
    const userData = {
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0].email_address,
      imageUrl: image_url,
    };
    await connectDB();
    await User.findByIdAndUpdate(id, userData);
  } catch (error) {
    console.log("Error updating user", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log("Error deleting user", error);
  }
};

export const findUser = async (id) => {
  try {
    await connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("Error finding user", error);
    return null;
  }
};
