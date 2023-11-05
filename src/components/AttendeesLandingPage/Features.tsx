import { Feature } from "./utils/Feature";

export const Features = () => {
	return (
		<div className="p-4">
			<div className="text-center text-3xl  md:text-4xl font-black p-6">
				A hackathon you'll{" "}
				<span className="drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
					remember
				</span>
			</div>
			<div className="grid lg:grid-cols-2 gap-12 h-fit w-fit ml-auto mr-auto sm:grid-cols-1">
				<Feature
					title="$1000 Cash Prize"
					text="Besides the grand prize, we’ll have cool tech prizes and internship opportunities for winners in each track!"
					logo={1}
				/>
				<Feature
					title="Cool Swag"
					text="Free T-shirts, stickers, and more, all made possible by our wonderful sponsors!"
					logo={2}
				/>
				<Feature
					title="Amazing Food"
					text="Lunch & Dinner from:"
					logo={3}
					food
				/>
				<Feature
					title="Beginner Friendly"
					text="To help you, mentors from:"
					logo={4}
					mentors
				/>
			</div>
		</div>
	);
};
