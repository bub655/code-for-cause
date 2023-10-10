export const FrequentlyAskedQuestions = () => {
	return (
		<>
			<div className="text-center text-4xl font-black p-6 drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
				Questions
			</div>
			<div className="p-4 grid lg:grid-cols-2 gap-12 h-fit w-fit ml-auto mr-auto sm:grid-cols-1">
				<div className="md:w-[24rem] bg-[#D9D9D9] rounded-[16px] p-4 text-black space-y-2">
					<div className="w-fit text-3xl font-bold">
						Are you a 501(c)(3) nonprofit?
					</div>
					<div className="w-fit">
						We are fiscally sponsored by Hack Club, a 501(c)(3) nonprofit,
						legally registered as "The Hack Foundation" with the EIN 81-2908499.
						All donations are tax-deductible.
					</div>
				</div>

				<div className="md:w-[24rem] bg-[#D9D9D9] rounded-[16px] p-4 text-black space-y-2">
					<div className="w-fit text-3xl font-bold">
						Where is the money going?
					</div>
					<div className="w-fit">
						Send us an email at{" "}
						<a className="underline" href="mailto:team@codeforcause.dev">
							team@codeforcause.dev
						</a>{" "}
						and we'll send you a copy of our budget!
					</div>
				</div>

				<div className="md:w-[24rem] bg-[#D9D9D9] rounded-[16px] p-4 text-black space-y-2">
					<div className="w-fit text-3xl font-bold">
						Can we see where the money is going?
					</div>
					<div className="w-fit">
						Thanks to our fiscal sponsor Hack Club, you can see all our finances
						on{" "}
						<a
							className="underline"
							href="https://hcb.hackclub.com/codeforcause"
						>
							our HCB dashboard
						</a>
						.
					</div>
				</div>

				<div className="md:w-[24rem] bg-[#D9D9D9] rounded-[16px] p-4 text-black space-y-2">
					<div className="w-fit text-3xl font-bold">
						What if we can't help financially?
					</div>
					<div className="w-fit">
						We're open to any kind of support! Send us an email at{" "}
						<a className="underline" href="mailto:team@codeforcause.dev">
							team@codeforcause.dev
						</a>{" "}
						and let's talk!
					</div>
				</div>
			</div>
		</>
	);
};
