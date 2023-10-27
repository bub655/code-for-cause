"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Analytics, logEvent } from "firebase/analytics";
import { analytics } from "@/utils/firebase";

const Register = () => {
	const searchParams = useSearchParams();

	const searchEmail = searchParams.get("email");

	const [isLoading, setIsLoading] = useState(false);
	const [grade, setGrade] = useState("");
	const [size, setSize] = useState("");
	const [skill, setSkill] = useState("");
	const [saved, setSaved] = useState(false);
	const [source, setSource] = useState("");

	const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const name = ((e.target as HTMLFormElement)[0] as any).value;
		const email = ((e.target as HTMLFormElement)[1] as any).value;
		const diet = ((e.target as HTMLFormElement)[5] as any).value;

		const response = await fetch(
			`/api/register?name=${name}&email=${email}&diet=${diet}&grade=${grade}&size=${size}&skill=${skill}&source=${source}`,
			{
				method: "POST",
			}
		);

		const json = await response.json();

		if (json.success) {
			console.log("Registration done: ", email);
		} else {
			console.error("Error registering: ", json.error);
		}

		logEvent((await analytics) as Analytics, "registered");

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
					<h2 className="text-2xl">You're registered!</h2>
					<p className="text-center font-normal">
						Check your email for a confirmation email with waivers required to
						participate in the event. If you don't see it, feel free to{" "}
						<span className="underline">
							<Link href="/contact">contact us</Link>
						</span>{" "}
						or send us an email at{" "}
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
					<h1 className="text-3xl">Register for Code for Cause 2023!</h1>
					<p className="text-md font-normal">All fields are required.</p>

					<div>
						<label className="text-lg block" htmlFor="name">
							Full Name
						</label>
						<input
							required
							placeholder="Tony Stark"
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
							We'll be in touch using this email, so make sure you check it
							regularly.
						</p>
						<input
							required
							defaultValue={searchEmail ?? ""}
							placeholder="tony.stark.01@gmail.com"
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none"
							spellCheck="false"
							type="email"
							id="email"
						/>
					</div>

					<div>
						<label className="block text-lg" htmlFor="grade">
							Grade
						</label>
						<select
							required
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none outline outline-neutral-700"
							id="grade"
							value={grade}
							onChange={(e) => setGrade(e.target.value)}
						>
							<option value="" disabled>
								Select a grade
							</option>
							<option value="8">8th Grade</option>
							<option value="9">9th Grade</option>
							<option value="10">10th Grade</option>
							<option value="11">11th Grade</option>
							<option value="12">12th Grade</option>
						</select>
					</div>

					<div>
						<label className="block text-lg" htmlFor="size">
							T-Shirt Size
						</label>
						<select
							required
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none outline outline-neutral-700"
							id="size"
							value={size}
							onChange={(e) => setSize(e.target.value)}
						>
							<option value="" disabled>
								Select a size
							</option>
							<option value="S">Adult Small</option>
							<option value="M">Adult Medium</option>
							<option value="L">Adult Large</option>
							<option value="XL">Adult Extra-Large</option>
						</select>
					</div>

					<div>
						<label className="block text-lg" htmlFor="size">
							How would you describe your technical skills?
						</label>
						<p className="mb-1 block text-md font-normal text-sm">
							Everyone's welcome! This question is just to help us gauge what
							resources we need to support attendees.
						</p>
						<select
							required
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none outline outline-neutral-700"
							id="size"
							value={skill}
							onChange={(e) => setSkill(e.target.value)}
						>
							<option value="" disabled>
								Select a skill level
							</option>
							<option value={1}>
								Beginner: have never coded before or just started learning
							</option>
							<option value={3}>
								Intermediate: I have taken CS classes OR worked on small
								individual projects
							</option>
							<option value={3}>
								Advanced: I'm comfortable with my skill set and can work on a
								project without much guidance
							</option>
						</select>
					</div>

					<div>
						<label className="text-lg block" htmlFor="diet">
							Do you have any dietary requirements?
						</label>
						<p className="mb-1 block text-md font-normal text-sm">
							Make sure to include if you are vegan or vegetarian or have any
							allergies. If you have none, write "N/A"
						</p>
						<input
							required
							placeholder="I only eat healthy food!"
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none"
							spellCheck="false"
							type="text"
							id="diet"
						/>
					</div>

					<div>
						<label className="block text-lg" htmlFor="size">
							How did you hear about us?
						</label>
						<select
							required
							className="w-full rounded-lg bg-white font-normal border border-gray-300 p-2 outline-none outline outline-neutral-700"
							id="size"
							value={source}
							onChange={(e) => setSource(e.target.value)}
						>
							<option value="" disabled>
								Select an option
							</option>
							<option value="google">Google Search</option>
							<option value="hack">Hack Club Hackathons Page</option>
							<option value="slack">Hack Club Slack</option>
							<option value="devpost">Devpost</option>
							<option value="instagram">Instagram</option>
							<option value="linkedin">Linkedin</option>
							<option value="friend">A friend</option>
						</select>
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

export default Register;
