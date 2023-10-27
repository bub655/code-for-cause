"use client";

import Link from "next/link";
import { useState } from "react";

export const NavbarMobile = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				type="button"
				className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
			>
				<svg
					className="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
						fill="#000000"
					/>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
					/>
				</svg>
				<span className="sr-only">Open Menu</span>
			</button>

			<div
				className={`${
					open ? "transform-none" : "-translate-y-full"
				} transition-transform fixed top-0 left-0 w-screen bg-white p-6 z-50 text-black`}
			>
				<div className="flex justify-between items-center">
					<div>
						<Link href="/" className="font-bold shadow-purple-400 text-2xl">
							Code for Cause
						</Link>
					</div>
					<button
						onClick={() => setOpen(false)}
						type="button"
						className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
					>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								fill="#000000"
								d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
							/>
						</svg>
						<span className="sr-only">Open Menu</span>
					</button>
				</div>
				<div className="flex flex-col space-y-2">
					<Link href="/sponsors" className="text-lg">
						Sponsor Us
					</Link>
					<a
						target="_blank"
						className="text-lg"
						href="https://hcb.hackclub.com/donations/start/codeforcause"
					>
						Donate now
					</a>
					<Link className="text-lg" href="/contact">
						Contact Us
					</Link>
					<a
						href="https://discord.gg/SWKsWxXaSq"
						className="text-lg transition w-full space-x-2 justify-center flex items-center h-10 bg-[#738adb] text-white px-4 rounded-full"
					>
						Join the Discord
					</a>
					<Link
						href="/register"
						className="text-lg transition w-full flex justify-center items-center h-10 bg-[#896FBC] hover:bg-[#7953C5] text-white px-4 rounded-full"
					>
						Register Now!
					</Link>
				</div>
			</div>
		</>
	);
};
