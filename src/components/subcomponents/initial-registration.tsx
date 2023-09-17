export const Email = () => {
	return (
		<div className="p-2 mb-16 w-fit mt-6 ml-auto mr-auto bg-[#D9D9D9] rounded-full ">
			<form
				onSubmit={() => {}}
				className="flex items-center justify-between space-x-8"
			>
				<input
					type="email"
					placeholder="Your Email"
					className="focus:outline-none ml-4 w-68 bg-transparent text-black pl-3 text-2xl font-bold border-b-[4px] border-[#7953C5]"
				/>
				<button
					type="submit"
					className="bg-[#896FBC] hover:bg-[#7953C5] font-semibold text-white px-4 py-2 rounded-full text-2xl"
				>
					I&apos;m interested!{" "}
				</button>
			</form>
		</div>
	);
};
