import React from "react";

const Hero = () => {
	return (
		<section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
			<div className="mx-auto w-screen max-w-screen-xl px-4 py-32 lg:flex">
				<div className="mx-auto max-w-prose text-center">
					<h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
						Manage Your Expense
						<strong className="text-indigo-500 sm:block">
							{" "}
							Control{" "}
						</strong>
						Your Money
					</h1>

					<p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
						Start Creating your budget and Save a Ton of Money
					</p>

					<div className="mt-4 flex justify-center gap-4 sm:mt-6">
						<a
							className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
							href="/sign-in"
						>
							Get Started
						</a>

						<a
							className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
							href="#"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
