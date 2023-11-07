import Image from "next/image";
import boxmate from "./images/boxmate.png";
import ubs from "./images/ubs.png";
import falconx from "./images/falconx.png";
import echo3D from "./images/echo3D.png";
import Link from "next/link";

export const Sponsors = () => {
	return (
		<>
			<div className=" text-center  text-3xl font-black m-2">
				Made possibly by
			</div>
			<div className="rounded-[16px] ml-auto mr-auto flex flex-col md:flex-row items-center justify-center w-fit flex p-4 px-8 bg-gray-300 space-y-4 md:space-y-0 md:space-x-8">
				<Link target="_blank" href="https://boxmate.co">
					<Image
						height={45}
						src={boxmate}
						placeholder="blur"
						alt="BoxMate logo"
					/>
				</Link>
				<Link target="_blank" href="https://www.ubs.com">
					<Image height={50} src={ubs} placeholder="blur" alt="UBS logo" />
				</Link>
				<Link target="_blank" href="https://falconx.us/">
					<Image
						height={45}
						src={falconx}
						placeholder="blur"
						alt="FalconX logo"
					/>
				</Link>
				<Link target="_blank" href="https://www.echo3d.com/">
					<Image
						height={40}
						src={echo3D}
						placeholder="blur"
						alt="echo3D logo"
					/>
				</Link>
			</div>
		</>
	);
};
