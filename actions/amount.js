import Product from "@/models/product";

export const getTotalAmount = async (items) => {
  const amount = await items.reduce(async (acc, item) => {
    const product = await Product.findById(item.product);
    return acc + product.offerPrice * item.quantity;
  }, 0);
  return amount;
};
