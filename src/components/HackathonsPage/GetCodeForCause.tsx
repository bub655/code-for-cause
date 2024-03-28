import Link from "next/link";
import { FaBullhorn, FaDollarSign, FaHandshake, FaStar } from "react-icons/fa6";

const GetCodeForCause = () => {
	return (
		<div className="space-y-4 px-20 pt-10">
			<h2 className="text-4xl max-w-xl font-black">
				Want Code for Cause at Your Hackathon?
			</h2>
			<p className="max-w-lg">
				If you're running your own hackathon and are interested in partnering
				with Code for Cause, we'd love to hear from you! Contact us at our email{" "}
				<a className="underline" href="mailto:team@codeforcause.dev">
					team@codeforcause.dev
				</a>{" "}
				or through our{" "}
				<Link className="underline" href="/contact">
					contact us page
				</Link>
				.
			</p>
			<div className="flex space-x-4">
				<div className="w-1/4 text-center flex flex-col items-center justify-center bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<FaStar size={48} />

					<h3 className="text-2xl">Increased Participation</h3>

					<p>
						Partnering with Code for Cause noticably increases project
						submission rates.
					</p>
				</div>

				<div className="w-1/4 text-center flex flex-col items-center justify-center bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<FaHandshake size={48} />

					<h3 className="text-2xl">Community Collaboration</h3>

					<p>
						Connect and work with local nonprofits through a Code for Cause
						partnership.
					</p>
				</div>

				<div className="w-1/4 text-center flex flex-col items-center justify-center bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<FaDollarSign size={48} />

					<h3 className="text-2xl">Appeal to Sponsors</h3>

					<p>Sponsors love to support hackathons that give to community.</p>
				</div>

				<div className="w-1/4 text-center flex flex-col items-center justify-center bg-gray-300 text-black p-4 rounded-xl space-y-2">
					<FaBullhorn size={48} />

					<h3 className="text-2xl">Increased Promotion</h3>

					<p>
						Partnered hackathons get access to our email list of 400+ hackers.
					</p>
				</div>
			</div>
		</div>
	);
};

export default GetCodeForCause;
