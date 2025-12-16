import { NextResponse } from "next/server";

export function corsResponse(req) {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Origin", "https://ems-frontend-murex.vercel.app");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

export function corsOptions() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://ems-frontend-murex.vercel.app",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}
