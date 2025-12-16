import { NextResponse } from "next/server";

export function middleware(req) {
  const response = NextResponse.next();

  // Allow both Vercel frontend and local dev
  const allowedOrigins = [
    "https://ems-frontend-murex.vercel.app",
    "http://localhost:5173",
  ];

  const origin = req.headers.get("origin");
  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight (OPTIONS) request
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin && allowedOrigins.includes(origin) ? origin : "",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
