type scheduleItemProps = {
	time: string;
	event: string;
};

export const ScheduleItem = (props: scheduleItemProps) => {
	return (
		<>
			<div className="ml-auto mr-auto flex w-fit justify-between p-4 pl-12 pr-12">
				<div className="font-semibold mr-24">{props.time}</div>
				<div className="w-48 text-left">{props.event}</div>
			</div>
		</>
	);
};
