import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./app/utils/schema.ts",
	dbCredentials: {
		connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
	},
});
