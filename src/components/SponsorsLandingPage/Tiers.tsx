export const SponsorshipTiers = () => {
	return (
		<div className="md:mb-16 text-center">
			<div className=" w-fit ml-auto mr-auto md:mt-2 bg-[#D9D9D9] rounded-[16px] p-2 md:p-4 tracking-wide text-black font-bold space-y-2">
				<div className="font-bold text-3xl text-center">Sponsorship Tiers</div>
				<div className="flex flex-row justify-between p-2">
					<div className="flex flex-col text-center px-6 space-y-4">
						<div className="font-semibold">What you get:</div>
						<div>Send Company Representatives</div>
						<div>Name on Hoodie</div>
						<div>Product Demo</div>
						<div>Sponsor Table</div>
						<div>Custom Award</div>
						<div>Company Swag</div>
						<div>Reserved Judging</div>
						<div>Logo on Website</div>
						<div>Presentations</div>
					</div>
					<div className="flex flex-col text-center px-6 space-y-4">
						<div className="font-semibold">Bronze</div>
						<div></div>
					</div>
					<div className="flex flex-col text-center px-6 space-y-4">
						<div className="font-semibold">Silver</div>
						<div></div>
					</div>
					<div className="flex flex-col text-center px-6 space-y-4">
						<div className="font-semibold">Gold</div>
						<div></div>
					</div>
					<div className="flex flex-col text-center px-6 space-y-4">
						<div className="font-semibold">Platinum</div>
						<div></div>
					</div>
				</div>
			</div>
			<div className="max-w-lg m-auto text-white text-center p-4">
				All tiers are customizable. If you are interested in sponsoring our
				event, please email us at{" "}
				<a href="mailto:team@codeforcause.dev" className="underline">
					team@codeforcause.dev
				</a>
			</div>
			<a
				href="mailto:team@codeforcause.dev"
				className="bg-[#896FBC] transition hover:bg-[#7953C5] rounded-full px-6 py-2 font-semibold text-2xl"
			>
				Get in touch!
			</a>
		</div>
	);
};
