import connectDB from "@/config/db";

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
    };
    console.log({ id, first_name, last_name, email_addresses, image_url });
    await connectDB();
    await User.create(userData);
    return userData
  } catch (error) {
    console.log("DB issue");
  }
};
