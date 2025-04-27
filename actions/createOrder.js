import connectDB from "@/config/db";
import Order from "@/models/order";
import User from "@/models/user";

export const createOrder = async (userId, orderSummary) => {
  try {
    await connectDB();
    const newOrder = await Order.create(orderSummary);
    const user = await User.findById(userId);
    user.cartItems = {};
    await user.save();
    console.log({ orderSummary });
    return newOrder;
  } catch (error) {
    console.log("Error creating order", error);
    return {};
  }
};
