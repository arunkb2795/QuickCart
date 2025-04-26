import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getAddress } from "@/actions/address";
export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    const response = await getAddress(userId);
    return NextResponse.json({
      success: true,
      message: "Address fetch successfully",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
