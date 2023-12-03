const EmailSaved = () => {
	return (
		<div className="flex flex-col items-center justify-center rounded-[2rem] space-y-4 w-full h-96 p-8 font-bold">
			<h1 className="text-center text-5xl font-black" id="email">
				We'll send you{" "}
				<span className="drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
					updates!
				</span>
			</h1>
			<p className="text-center font-normal md:max-w-md">
				You've been added to our email list. We'll email you with updates
				regarding future events. Code for Cause 2 is not far away so don't
				ignore our emails! 😉😉
			</p>
		</div>
	);
};

export default EmailSaved;
