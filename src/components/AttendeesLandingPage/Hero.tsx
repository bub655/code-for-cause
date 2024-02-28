import { FaArrowRight, FaCalendar, FaLocationDot } from "react-icons/fa6";
import { Sponsors } from "./Sponsors";
import RegisterButton from "../RegisterButton";

export const Hero = () => {
	return (
		<>
			<div className="px-4 md:px-20 space-y-6 text-center">
				<div className="font-black md:text-8xl text-6xl">
					<span>Back and </span>
					<span className="drop-shadow-[4px_6px_var(--tw-shadow-color)] shadow-[#896FBC]">
						Better.
					</span>
				</div>

				<div className="m-auto font-bold text-white text-3xl max-w-lg">
					Join us for the first{" "}
					<a className="hover:underline" href="https://www.vikinghacks.com">
						VikingHacks
					</a>{" "}
					x Code for Cause hackathon
				</div>

				<div className="m-auto flex items-center md:flex-row flex-col w-full md:w-fit font-bold space-x-8 text-xl">
					<a
						target="_blank"
						className="flex space-x-2 items-center hover:underline"
						href="https://maps.app.goo.gl/6Ypn1m3xj77Hdket9"
					>
						<FaLocationDot />
						<span>Ohlone College, Fremont</span>
					</a>

					<div className="flex space-x-2 items-center">
						<FaCalendar />
						<span>April 13, 2024</span>
					</div>
				</div>

				<RegisterButton />
			</div>
			{/* <Sponsors /> */}
		</>
	);
};
