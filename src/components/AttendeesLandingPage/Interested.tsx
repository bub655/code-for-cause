import RegisterButton from "../RegisterButton";

export const Interest = () => {
	return (
		<div className="space-y-4">
			<div className="text-center text-4xl font-black" id="email">
				<span className="drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
					Interested?{" "}
				</span>
				Register now!
			</div>
			<RegisterButton />
		</div>
	);
};
