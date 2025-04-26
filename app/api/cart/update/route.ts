import { updateCart } from "@/actions/cart";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    const { cartData } = await req.json();
    const cartItems = await updateCart(userId, cartData);
    return NextResponse.json({ success: true, data: cartItems });
  } catch (error) {}
}
