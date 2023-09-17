"use client";
import { Email } from "./subcomponents/initial-registration";

export const Interest = () => {
	return (
		<>
			<div className="text-center text-4xl font-black p-6 pt-16">
				<span className="drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
					Interested?{" "}
				</span>
				Drop your Email!
			</div>
			<div className="ml-auto mr-auto w-96 text-center font-semibold">
				While we don&apos;t have the details yet, drop your email below to get
				all the updates about Code for a Cause!
			</div>
			<Email />
		</>
	);
};
