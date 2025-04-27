import { getTotalAmount } from "@/actions/amount";
import { createOrder } from "@/actions/createOrder";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    const { address, items } = await req.json();

    if (!address || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    //calculate amount using items
    const amount = await getTotalAmount(items);

    const orderSummary = {
      userId,
      address,
      items,
      amount: amount + Math.floor(amount * 0.02),
      date: Date.now(),
    };

    const response = await createOrder(userId, orderSummary);
    return NextResponse.json({
      success: true,
      message: "Order created successfully",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Order failed!",
    });
  }
}
