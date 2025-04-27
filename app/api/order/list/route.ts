import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getOrders } from "@/actions/getOrders";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    const response = await getOrders(userId);
    return NextResponse.json({
      success: true,
      message: "Orders list successfully",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Order list failed!",
    });
  }
}
