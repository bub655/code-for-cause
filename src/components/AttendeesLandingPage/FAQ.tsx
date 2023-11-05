"use client";
import { FAQItem } from "./utils/FAQItem";

export const FrequentlyAskedQuestions = () => {
	return (
		<>
			<div className="text-center text-4xl font-black mt-8 drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
				Questions
			</div>
			<div className="p-4 grid lg:grid-cols-2 gap-12 h-fit w-fit ml-auto mr-auto sm:grid-cols-1">
				<FAQItem
					question="When and Where is it?"
					answer="Code for Cause will be taking place 7:30 AM at the FalconX incubator event space at 691 S Milpitas Blvd. The event will end around 9:00 PM."
				/>
				<FAQItem question="What does it cost?" answer="It's completely free!" />
				<FAQItem
					question="What to bring?"
					answer="A laptop, a charger, and a smile!"
				/>
				<FAQItem
					question="Who can participate?"
					answer="Code for Cause is open to all high-schoolers!"
				/>
				<FAQItem
					question="Who are the judges?"
					answer="The judge panel will include multiple executives from top software companies and representatives of the organization that you are solving for."
				/>
				<FAQItem
					question="Do I need a team?"
					answer="Absolutely not! We’ll have fun icebreakers to help you find a team if you don’t have one. If you do have a team, our max team size is 4."
				/>
			</div>
		</>
	);
};
