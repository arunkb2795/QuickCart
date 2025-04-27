import Product from "@/models/product";

export const getTotalAmount = async (items) => {
  const amount = items.reduce(async (acc, item) => {
    const product = await Product.findById(item.product);
    return (await acc) + product.offerPrice * item.quantity;
  }, 0);
  return amount;
};
