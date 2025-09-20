import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes here
const publicRoutes = ["/"];

export default function middleware(req) {
	const { pathname } = req.nextUrl;

	if (publicRoutes.some((path) => pathname === path)) {
		return NextResponse.next(); // Skip Clerk auth for public routes
	}

	// Apply Clerk middleware for all other routes
	return clerkMiddleware()(req);
}

export const config = {
	matcher: [
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		"/(api|trpc)(.*)",
	],
};
