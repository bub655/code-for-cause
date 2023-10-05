type scheduleItemProps = {
	time: string;
	event: string;
	dark?: boolean;
};

export const ScheduleItem = (props: scheduleItemProps) => {
	return (
		<div
			className={`${
				props.dark ? "bg-stone-400/40" : ""
			} w-full ml-auto mr-auto flex w-fit justify-between p-2 md:pl-12 md:pr-12`}
		>
			<div className="font-semibold md:mr-24">{props.time}</div>
			<div className="md:w-48 text-left">{props.event}</div>
		</div>
	);
};
