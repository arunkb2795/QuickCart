import { getProductList } from "@/actions/product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { userId } = getAuth(req);

  console.log({ userId });

  if (!userId) {
    return NextResponse.json({ success: false, message: "not authorized" });
  }
  try {
    const products = await getProductList(userId);
    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
