"use client";
import { Email } from "./utils/EmailForm";

export const Hero = () => {
	return (
		<>
			<div className="text-center p-4 md:p-8">
				<div className="pb-4 font-black md:text-8xl text-6xl">
					<span>Code for </span>
					<span className="drop-shadow-[4px_6px_var(--tw-shadow-color)] shadow-[#896FBC]">
						Cause
					</span>
				</div>
				<div className="m-auto font-bold text-white text-3xl pb-4 md:w-1/2">
					The first philanthropic hackathon for middle- and high-schoolers.
				</div>
				<Email />
				<div className="flex items-center md:flex-row flex-col w-full md:w-fit ml-auto mr-auto bg-[#D9D9D9] rounded-full p-2 md:px-6 md:p-4 text-black font-bold md:space-x-4 text-xl">
					<a target="_blank" href="https://maps.app.goo.gl/Ep8qt6LtHjQcMKNW9">
						691 S Milpitas Blvd.
					</a>
					<span className="hidden md:inline text-2xl">|</span>
					<span>December 9, 2023</span>
				</div>
			</div>
		</>
	);
};
