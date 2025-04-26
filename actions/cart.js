import connectDB from "@/config/db";
import User from "@/models/user";

export const getCart = async (id) => {
  try {
    await connectDB();
    const data = await User.findById(id);
    return data.cartItems;
  } catch (error) {
    console.log("Error fetching cart", error);
    return {};
  }
};

export const updateCart = async (id, cartItems) => {
  try {
    await connectDB();
    const user = await User.findById(id);
    user.cartItems = cartItems;
    await user.save();
    return user.cartItems;
  } catch (error) {
    console.log("Error updating cart", error);
    return {};
  }
};
