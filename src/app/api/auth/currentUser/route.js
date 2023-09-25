import { NextResponse } from "next/server";
import "@/models/configs/firebase_config";
import { getAuth } from "firebase/auth";

export function GET() {
  const auth = getAuth();
  const user = auth.currentUser;

  return NextResponse.json({ user });
}
