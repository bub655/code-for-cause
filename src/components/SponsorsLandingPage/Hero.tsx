"use client";

export const Hero = () => {
	return (
		<>
			<div className="text-center p-4 md:p-8">
				<div className="pb-4 font-black md:text-8xl text-6xl">
					<span className="drop-shadow-[4px_6px_var(--tw-shadow-color)] shadow-[#896FBC]">
						Empower{" "}
					</span>
					<span>the next problem-solvers</span>
				</div>
				<div className="m-auto font-bold text-white text-3xl pb-12 md:w-8/12">
					Support 200+ middle- and high-school hackers solving <em>real</em>{" "}
					problems for <em>real</em> organizations.
				</div>
				<a
					href="mailto:team@codeforcause.dev"
					className="bg-[#896FBC] transition hover:bg-[#7953C5] rounded-full px-10 py-3 font-semibold text-2xl"
				>
					Get in touch!
				</a>
				<div className="my-12 flex items-center md:flex-row flex-col w-full md:w-fit mx-auto bg-[#D9D9D9] rounded-full p-2 md:px-6 md:p-4 text-black font-bold md:space-x-4 text-xl">
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
