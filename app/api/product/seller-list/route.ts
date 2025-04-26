import { getProductList } from "@/actions/product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import authSeller from "@/lib/authSeller";

export async function GET(req) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ success: false, message: "not authorized" });
  }

  const isSeller = await authSeller(userId);

  if (!isSeller) {
    return NextResponse.json({ success: false, message: "not authorized" });
  }

  try {
    const products = await getProductList(userId);
    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
