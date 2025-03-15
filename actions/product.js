import connectDB from "@/config/db";
import Product from "@/models/product";

export const AddProduct = async ({
  userId,
  name,
  description,
  category,
  price,
  offerPrice,
  image,
  date,
}) => {
  console.log({ userId });
  try {
    const productData = {
      userId,
      name,
      description,
      category,
      price,
      offerPrice,
      image,
      date,
    };
    await connectDB();
    await Product.create(productData);
  } catch (error) {
    console.log("Product added error: ", error);
  }
};

export const getProductList = async (userId) => {
  try {
    await connectDB();
    const products = await Product.find({ userId }).exec();
    return products;
  } catch (error) {
    console.log("Error fetching product list: ", error);
  }
};
