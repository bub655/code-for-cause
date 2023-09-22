import collaboration from "./images/collaboration.png";
import Image from "next/image";

export const Mission = () => {
	return (
		<>
			<div className="ml-4 mr-4 mx-auto flex justify-center space-x-8">
				<hr className="mx-auto my-4 horizontal-line flex-auto mx-8" />
				<h2 className="mx-auto text-3xl font-bold">Our mission</h2>
				<hr className="mx-auto my-4 horizontal-line flex-auto mx-8" />
			</div>
			<div className="p-4 md:p-8 flex md:flex-row flex-col flex-wrap justify-between">
				<div className="md:w-6/12 md:ml-6">
					<div className="text-3xl md:text-4xl">
						<span className="font-black drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
							Build{" "}
						</span>
						<span className="font-black">
							the next generation of problem-solvers
						</span>
					</div>
					<div className="pt-4 md:w-10/12 mt-2 text-lg leading-6">
						School only teaches so much. To create developers that create
						solutions that truly impact lives, students need access to hands-on
						experience. Code for Cause aims to provide students with a safe
						space to gain this invaluable experience.
					</div>
				</div>
				<div className="p-2 pr-8 ml-auto mr-auto text-center justify-contents-center font-bold text-lg">
					<Image
						src={collaboration}
						alt="Collaborative sutdents working together"
						height={240}
					/>
				</div>
			</div>
		</>
	);
};
