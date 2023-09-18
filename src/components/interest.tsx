"use client";
import { Email } from "./subcomponents/Email";

export const Interest = () => {
	return (
		<>
			<div className="text-center text-4xl font-black p-6 pt-16" id="register">
				<span className="drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
					Interested?{" "}
				</span>
				Register Now!
			</div>
			<div className="m-auto md:w-96 text-center font-semibold">
				Registering takes a few minutes and is completely free. Enter your email
				below to start!
			</div>
			<Email />
		</>
	);
};
