import Image from "next/image";
import goodwillPic from "./images/goodwill.png";

export const Organizations = () => {
	return (
		<>
			<div className=" text-center  text-3xl font-black p-6">
				Organizations you'll be solving for
			</div>
			<div className="rounded-[16px] ml-auto mr-auto flex justify-center flex-center w-fit flex p-12 bg-gray-300 space-x-8 mb-16">
				<Image
					height={100}
					src={goodwillPic}
					placeholder="blur"
					alt="Goodwill logo"
				/>
			</div>
		</>
	);
};
