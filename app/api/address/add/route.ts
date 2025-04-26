import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { addAddress } from "@/actions/address";
export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    const { address } = await req.json();
    const response = await addAddress(address, userId);
    return NextResponse.json({
      success: true,
      message: "Address added successfully",
      data: response,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
