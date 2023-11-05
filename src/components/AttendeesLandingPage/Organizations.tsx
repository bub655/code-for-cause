import Image from "next/image";
import boxmate from "./images/boxmate.png";
import isoaccess from "./images/isoaccess.png";
import Link from "next/link";

export const Organizations = () => {
	return (
		<>
			<div className="text-center  text-3xl font-black m-2 mt-8">
				<span className="font-black drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
					Organizations{" "}
				</span>
				you'll be solving for
			</div>
			<div className="rounded-[16px] ml-auto mb-8 mr-auto flex flex-col md:flex-row items-center justify-center w-fit flex p-4 px-8 bg-gray-300 space-y-4 md:space-y-0 md:space-x-16">
				<Link href="https://boxmate.co/">
					<Image
						height={50}
						src={boxmate}
						placeholder="blur"
						alt="Goodwill logo"
					/>
				</Link>
				<Link href="https://www.isoaccess.org/">
					<Image
						height={50}
						src={isoaccess}
						placeholder="blur"
						alt="Goodwill logo"
					/>
				</Link>
				<div className="text-black font-bold text-2xl">+ more to come!</div>
			</div>
		</>
	);
};
