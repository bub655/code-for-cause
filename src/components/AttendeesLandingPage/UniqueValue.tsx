export const Unique = () => {
	return (
		<div className="p-4  md:p-12 flex md:flex-row flex-col flex-wrap justify-between">
			<div className="md:w-6/12 md:ml-6">
				<span>What is a philanthropic hackathon?</span>
				<div className="text-3xl md:text-4xl">
					<span className="font-black">Solve problems for </span>
					<span className="font-black drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
						real{" "}
					</span>
					<span className="font-black">businesses and non-profits</span>
				</div>
				<div className="md:w-10/12 mt-2 text-lg leading-5">
					Many lack the resources to build high-quality custom tech solutions to
					meet their needs. That&apos;s where you come in. At Code for Cause,
					you&apos;ll be creating solutions that help those that need it most.
				</div>
			</div>
			<div className="p-2 md:w-5/12 ml-auto mr-auto text-center justify-contents-center font-bold text-lg">
				What a project might look like
				<div className="w-fit ml-auto mr-auto md:mt-2 bg-[#D9D9D9] rounded-[16px] p-4 md:p-8 tracking-wide text-black font-bold space-y-2">
					<div className="line-through decoration-red-500/80 decoration-4 italic">
						solve food wastage for the 1000th time
					</div>
					<div>help the local Goodwill automate pickups</div>
				</div>
				<div className="text-[10px] mt-2 font-normal leading-3">
					Note: this is just an example! we&apos;ll have 5-10 different tracks
					like this to choose from!
				</div>
			</div>
		</div>
	);
};
