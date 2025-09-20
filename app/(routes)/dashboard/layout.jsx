"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { Budgets } from "@/app/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { db } from "@/app/utils/dbConfig";

function DashboardLayout({ children }) {
	const { user } = useUser();
	const router = useRouter();

	useEffect(() => {
		user && checkUserBudget();
	}, [user]);
	const checkUserBudget = async () => {
		const result = await db
			.select()
			.from(Budgets)
			.where(
				eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress)
			);

		console.log(result);
		if (result?.length == 0) {
			router.replace("/dashboard/budgets");
		}
	};
	return (
		<div>
			<div className="fixed md:w-64 hidden md:block ">
				<SideNav />
			</div>
			<div className="md:ml-64 ">
				<DashboardHeader />
			</div>
		</div>
	);
}

export default DashboardLayout;
