import Link from "next/link";
import {
	FaBullhorn,
	FaDollarSign,
	FaFile,
	FaHandshake,
	FaStar,
} from "react-icons/fa6";

const WhatIs = () => {
	return (
		<div className="space-y-4 md:px-20 px-4 pt-10">
			<h2 className="text-5xl max-w-xl font-black">
				What is the Code for Cause track?
			</h2>
			<p className="max-w-lg text-xl">
				Build <i>real</i> solutions for <i>real</i> nonprofits at hackathons
				near you.
			</p>
			<div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
				<div className="md:w-1/3 text-center flex flex-col items-center justify-center bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<FaDollarSign size={48} />

					<h3 className="text-2xl">Prizes</h3>

					<p>You can expect great prizes, just like any other track.</p>
				</div>

				<div className="md:w-1/3 text-center flex flex-col items-center justify-center bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<FaFile size={48} />

					<h3 className="text-2xl">Great on a Resume</h3>

					<p>
						Colleges and employers love seeing real projects that help real
						nonprofits.
					</p>
				</div>

				<div className="md:w-1/3 text-center flex flex-col items-center justify-center bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<FaHandshake size={48} />

					<h3 className="text-2xl">Fulfillment</h3>

					<p>
						Put your coding skills to a good use and give back to your
						community.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhatIs;
