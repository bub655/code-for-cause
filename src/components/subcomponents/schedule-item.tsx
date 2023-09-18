type scheduleItemProps = {
	time: string;
	event: string;
};

export const ScheduleItem = (props: scheduleItemProps) => {
	return (
		<>
			<div className="ml-auto mr-auto flex w-fit justify-between p-4 md:pl-12 md:pr-12">
				<div className="font-semibold md:mr-24">{props.time}</div>
				<div className="md:w-48 text-left">{props.event}</div>
			</div>
		</>
	);
};
