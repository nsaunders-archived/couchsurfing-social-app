import { getAccounts } from "@/store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("id");
  if (!userId || !(await getAccounts()).some((id) => id === userId)) {
    return redirect("/");
  }
  cookies().set("id", userId);
  redirect("/feed");
}
