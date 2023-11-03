import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { category: string; item: string } },
) {
  return NextResponse.json({
    category: context.params.category,
    item: context.params.item,
  });
}
