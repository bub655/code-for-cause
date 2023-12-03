import { Email } from "./utils/EmailForm";

export const Interest = () => {
	return (
		<>
			<div className="text-center text-4xl font-black pt-24" id="email">
				<span className="drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
					Interested?{" "}
				</span>
				Join Email List!
			</div>
			<Email />
		</>
	);
};
