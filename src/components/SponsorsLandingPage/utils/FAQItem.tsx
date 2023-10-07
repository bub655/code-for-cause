type FAQItemProps = {
	question: string;
	answer: string;
};
export const FAQItem = (props: FAQItemProps) => {
	return (
		<div className="md:w-[24rem] bg-[#D9D9D9] rounded-[16px] p-4 text-black font-bold space-y-2">
			<div className="w-fit text-3xl">{props.question}</div>
			<div className="w-fit font-normal">{props.answer}</div>
		</div>
	);
};
