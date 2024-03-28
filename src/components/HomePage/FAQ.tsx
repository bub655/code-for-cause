"use client";
import { FAQItem } from "./utils/FAQItem";

const FrequentlyAskedQuestions = () => {
	return (
		<div>
			<div className="text-center text-4xl font-black mt-8 drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
				Questions
			</div>
			<div className="p-4 grid lg:grid-cols-2 gap-12 h-fit w-fit ml-auto mr-auto sm:grid-cols-1">
				<FAQItem
					question="So who runs the hackathons?"
					answer="The hackathons that we partner with typically have their own organizing team. We serve as the middle man, connecting the nonprofit to the hackathon."
				/>
				<FAQItem
					question="Can I get service hours?"
					answer="Yes, because you are building a project for real 501(c)3 nonprofits, you can get service hours for your work."
				/>
				<FAQItem
					question="Who can participate?"
					answer="If you can participate in the hackathon we are partnered with, you can participate in the Code for Cause track."
				/>
				<FAQItem
					question="How do I get notified when a hackathon is happening?"
					answer="Join our email list and we'll send you an email whenever we partner with a new hackathon!"
				/>
				<FAQItem
					question="Who are the judges?"
					answer="The judge panel will vary from hackathon to hackathon, but they will typically be a mix of nonprofit representatives and hackathon organizers."
				/>
				<FAQItem
					question="What happens after the hackathon?"
					answer="After the hackathon, we'll connect you with the nonprofit to continue working on the project if you'd like. This is great for earning service hours and recommendation letters!"
				/>
			</div>
		</div>
	);
};

export default FrequentlyAskedQuestions;
