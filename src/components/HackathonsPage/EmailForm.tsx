"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const HackathonsEmailForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const saveEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const email = ((e.target as HTMLFormElement)[0] as any).value;

		const response = await fetch(`/api/save-email?email=${email}`, {
			method: "POST",
		});

		const json = await response.json();

		if (json.success) {
			console.log("Email saved: ", email);
		} else {
			console.error("Error saving email: ", json.error);
		}

		setIsLoading(false);
		router.push(`/email-saved`);
	};

	return (
		<form
			onSubmit={saveEmail}
			className="md:w-fit w-full text-center mt-2 relative flex flex-col bg-gray-100 md:pt-0 space-y-2 rounded-3xl p-2 md:p-0"
		>
			<input
				type="email"
				required
				placeholder="What's your email?"
				className="focus:outline-none h-14 w:full md:w-96 w-full bg-gray-200 rounded-full px-2 pl-6 md:px-6 text-black text-lg font-bold "
			/>
			<div className="md:absolute top-1 right-1">
				<button
					disabled={isLoading}
					type="submit"
					className="bg-[#896FBC] disabled:bg-[#7953C5] h-12 transition w-full hover:bg-[#7953C5] font-semibold text-white px-4 py-2 rounded-full text-lg"
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
			</div>
		</form>
	);
};

export default HackathonsEmailForm;
