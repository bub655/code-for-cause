import Image from "next/image";
import collaboration from "../images/collaboration.png";

export const UniqueP2 = () => {
	return (
		<div className="p-4 md:p-8 md:pb-24 flex md:flex-row flex-col flex-wrap justify-between">
			<div className="md:w-6/12 md:ml-6">
				<div className="text-3xl md:text-4xl">
					<span className="font-black">Give back to </span>
					<span className="font-black drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
						community{" "}
					</span>
					<span className="font-black">using technological skills</span>
				</div>
				<div className="md:w-10/12 mt-2 text-lg leading-5">
					Unlike traditional hackathons, we focus on solving real-world
					challenges faced by nonprofits, fostering a culture of impact among
					the next generation. By supporting us, you're supporting young talent
					dedicated to making positive change in their communities.
				</div>
			</div>
			<div className="p-2 md:w-5/12 ml-auto mr-auto text-center justify-contents-center font-bold text-lg">
				Example Projects:
				<div className="w-fit ml-auto mr-auto md:mt-2 bg-[#D9D9D9] rounded-[16px] p-2 md:p-6 tracking-wide text-black font-semibold space-y-2">
					<div>smart inventory for local food banks</div>
					<div>
						help the local <em>Goodwill</em> automate pickups
					</div>
					<div>crisis response app for first-responders</div>
				</div>
			</div>
		</div>
	);
};
