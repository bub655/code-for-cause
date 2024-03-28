import { FaArrowDown } from "react-icons/fa6";

const HackathonsPageHero = () => {
	return (
		<div className="px-20 py-10 text-center space-y-8">
			<div className="font-black max-w-4xl m-auto md:text-8xl text-6xl">
				<span>Hackathons with a </span>
				<span className="drop-shadow-[4px_6px_var(--tw-shadow-color)] shadow-[#896FBC]">
					purpose.
				</span>
			</div>
			<div className="text-3xl max-w-2xl m-auto">
				Work with a local nonprofit at a hackathon with a Code for Cause track!
			</div>
		</div>
	);
};

export default HackathonsPageHero;
