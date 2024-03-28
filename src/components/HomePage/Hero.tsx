import { FaCalendar, FaLocationDot } from "react-icons/fa6";
import RegisterButton from "../RegisterButton";

export const Hero = () => {
	return (
		<>
			<div className="px-4 md:px-20 space-y-6 text-center">
				<div className="font-black md:max-w-3xl m-auto md:text-8xl text-6xl">
					<span>Code for Cause is </span>
					<span className="drop-shadow-[4px_6px_var(--tw-shadow-color)] shadow-[#896FBC]">
						back.
					</span>
				</div>

				<div className="space-y-4">
					<div className="m-auto font-bold text-white md:text-3xl text-2xl md:max-w-lg">
						Catch the Code for Cause track at{" "}
						<a className="hover:underline" href="https://ohlonehacks.org/">
							Ohlone Hacks
						</a>
						!
					</div>

					<div className="m-auto flex items-center md:flex-row flex-col w-full md:w-fit font-bold md:space-x-8 text-xl">
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
							<span>April 14, 2024</span>
						</div>
					</div>

					<RegisterButton />
				</div>
			</div>
		</>
	);
};
