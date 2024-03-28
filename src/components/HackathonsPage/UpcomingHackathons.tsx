import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import {
	FaCalendar,
	FaClock,
	FaLocationDot,
	FaLocationPin,
} from "react-icons/fa6";
import HackathonsEmailForm from "./EmailForm";

const UpcomingHackathons = () => {
	return (
		<div className="space-y-4 md:px-20 px-4 pt-10">
			<h2 className="text-4xl max-w-xl font-black">
				Upcoming Code for Cause Partnered Hackathons
			</h2>
			<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
				<div className="md:w-1/2 bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<h3 className="text-2xl">Ohlone Hacks</h3>
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-2">
							<FaCalendar size={24} />
							<div className="text-lg">Apr 14</div>
						</div>
						<div className="flex items-center space-x-2">
							<FaClock size={24} />
							<div className="text-lg">15 Hrs</div>
						</div>
						<div className="flex items-center space-x-2">
							<FaLocationDot size={24} />
							<div className="text-lg">Fremont</div>
						</div>
					</div>
					<p>
						Ohlone Hacks is a 15 hour hackathon for students to innovate and
						code at Ohlone College, free of charge. Tackle societal and
						environmental challenges, build tech solutions with minimal coding,
						and push the boundaries of digital entertainment.
					</p>
					<div className="flex space-x-4 items-center">
						<a
							href="https://ohlonehacks.org/register"
							target="_blank"
							className="transition flex items-center h-10 bg-[#896FBC] hover:bg-[#7953C5] text-white px-4 rounded-full"
						>
							Register
						</a>
						<a
							href="https://ohlonehacks.org"
							target="_blank"
							className="text-blue-500 hover:underline"
						>
							<div className="space-x-2 flex items-center">
								<div>Learn More</div>
								<FaExternalLinkAlt />
							</div>
						</a>
					</div>
				</div>

				<div className="md:w-1/2 bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<h3 className="text-2xl">More hackathons coming soon!</h3>
					<p>
						Drop your email below to get notified about future Code for Cause
						partnered hackathons.
					</p>
					<HackathonsEmailForm />
				</div>
			</div>
		</div>
	);
};

export default UpcomingHackathons;
