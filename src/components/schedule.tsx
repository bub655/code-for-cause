import { ScheduleItem } from "./subcomponents/schedule-item";

export const Schedule = () => {
	return (
		<div className="p-4">
			<div className="pt-16 text-center text-4xl font-black p-6 drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
				Schedule
			</div>
			<div className="p-1 m-auto align-center rounded-[2rem] w-fit bg-[#D9D9D9] text-black font-bold text-xl">
				<div className="text-sm text-center pt-6 pb-2 font-bold md:w-96 m-auto">
					We're working on adding in more guest speakers and workshops, so stay
					tuned!
				</div>
				<div>
					<ScheduleItem time="7:30 am" event="Check-in opens" />
					<ScheduleItem time="8:30 am" event="Opening Ceremony" />
					<ScheduleItem time="9:00 am" event="Hacking Begins!" />
					<ScheduleItem time="12:30 pm" event="Lunch" />
					<ScheduleItem time="6:00 pm" event="Dinner" />
					<ScheduleItem time="6:30 pm" event="Judging Begins" />
					<ScheduleItem time="9:00 pm" event="Awards Ceremony" />
				</div>
			</div>
		</div>
	);
};
