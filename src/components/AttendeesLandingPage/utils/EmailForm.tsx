export const Email = () => {
	return (
		<form
			onSubmit={() => {}}
			className="mb-16 w-fit mt-2 ml-auto mr-auto relative flex flex-col bg-[#D9D9D9] pt-0 rounded-3xl p-2 md:p-0 md:bg-transparent"
		>
			<input
				type="email"
				required
				placeholder="What's your email?"
				className="focus:outline-none h-14 w:full md:w-128 bg-[#D9D9D9] rounded-full px-2 md:px-6 text-black text-2xl font-bold "
			/>
			<div className="md:absolute top-1 right-1">
				<button
					type="submit"
					className="bg-[#896FBC] h-12 transition w-full hover:bg-[#7953C5] font-semibold text-white px-4 py-2 rounded-full text-2xl"
				>
					Sign me up!
				</button>
			</div>
		</form>
	);
};
