import connectDB from "@/config/db";
import Order from "@/models/order";

export const getOrders = async (userId) => {
  try {
    await connectDB();
    const orders = await Order.find({ userId }).populate(
      "address items.product"
    );
    console.log({orders})
    return orders;
  } catch (error) {
    console.log("Error creating order", error);
    return {};
  }
};
