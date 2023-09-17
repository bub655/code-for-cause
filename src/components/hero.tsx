"use client";
import { Email } from "./subcomponents/initial-registration";

export const Hero = () => {
	return (
		<>
			<div className="pt-20 text-center">
				<div className="pb-4">
					<span className="font-black shadow-purple-400 text-8xl">
						Code for{" "}
					</span>
					<span className="font-black drop-shadow-[4px_6px_var(--tw-shadow-color)] shadow-[#896FBC] text-8xl">
						Cause
					</span>
				</div>
				<div className="m-auto font-bold text-white text-3xl pb-4 w-1/2">
					The first philanthropic hackathon for middle- and high-schoolers.
				</div>
				<Email />
				<div className="w-fit ml-auto mr-auto bg-[#D9D9D9] rounded-full p-6">
					<div className="text-black font-bold space-x-4 text-xl ml-2 mr-2">
						<a target="_blank" href="https://maps.app.goo.gl/Ep8qt6LtHjQcMKNW9">
							691 S Milpitas Blvd.
						</a>
						<span className="text-2xl">|</span>
						<span>December 9, 2023</span>
					</div>
				</div>
			</div>
		</>
	);
};
