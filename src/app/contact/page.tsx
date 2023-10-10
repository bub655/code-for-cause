"use client";

import { useState } from "react";

const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [saved, setSaved] = useState(false);

	const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const name = ((e.target as HTMLFormElement)[0] as any).value;
		const email = ((e.target as HTMLFormElement)[1] as any).value;
		const message = ((e.target as HTMLFormElement)[2] as any).value;

		const response = await fetch(
			`/api/contact?name=${name}&email=${email}&msg=${message}`,
			{
				method: "POST",
			}
		);

		const json = await response.json();

		if (json.success) {
			console.log("Message saved: ", email);
		} else {
			console.error("Error saving message: ", json.error);
		}

		setIsLoading(false);
		setSaved(true);
	};

	return (
		<div className="flex justify-center p-4">
			{saved ? (
				<div className="flex flex-col items-center rounded-[2rem] space-y-2 w-full md:w-96 p-8 bg-[#D9D9D9] text-black font-bold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="74"
						height="74"
						viewBox="0 0 24 28"
					>
						<path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
					</svg>
					<h2 className="text-2xl">Message sent!</h2>
					<p className="text-center font-normal">
						We'll try our best to reply to you at the email you provided in the
						next 48 hours. If you don't see anything, please check your spam
						folder or feel free to email us at{" "}
						<a className="underline" href="mailto:team@codeforcause.dev">
							team@codeforcause.dev
						</a>
					</p>
				</div>
			) : (
				<form
					onSubmit={submitForm}
					className="rounded-[2rem] space-y-4 max-w-xl p-8 bg-[#D9D9D9] text-black font-bold"
				>
					<h1 className="text-3xl">Send us a Message!</h1>
					<p className="text-md font-normal">All fields are required.</p>

					<div>
						<label className="text-lg block" htmlFor="name">
							Full Name
						</label>
						<input
							required
							placeholder="Steve Rogers"
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none"
							spellCheck="false"
							type="text"
							id="name"
						/>
					</div>

					<div>
						<label className="block text-lg" htmlFor="email">
							Contact Email
						</label>
						<p className="mb-1 block text-md font-normal text-sm">
							We'll respond to this, so make sure it's an email you frequently
							use.
						</p>
						<input
							required
							placeholder="captain.steve50@gmail.com"
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none"
							spellCheck="false"
							type="email"
							id="email"
						/>
					</div>

					<div>
						<label className="text-lg block" htmlFor="message">
							Message
						</label>
						<textarea
							required
							placeholder="I have an idea for how we can make Code for Cause even better..."
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none"
							spellCheck="false"
							id="message"
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="bg-[#896FBC] disabled:bg-[#7953C5] h-12 transition w-full hover:bg-[#7953C5] font-semibold text-white px-4 py-2 rounded-lg text-2xl"
					>
						{isLoading ? (
							<div className="flex justify-center items-center">
								<div
									className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
									role="status"
								>
									<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
										Loading...
									</span>
								</div>
							</div>
						) : (
							"Submit"
						)}
					</button>
				</form>
			)}
		</div>
	);
};

export default Contact;
