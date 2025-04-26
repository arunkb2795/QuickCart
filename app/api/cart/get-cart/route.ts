import { getCart } from "@/actions/cart";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);
  const {address} = await req.json()
  try {
    const cartItems = await getCart(userId);
    return NextResponse.json({ success: true, data: cartItems });
  } catch (error) {}
}
