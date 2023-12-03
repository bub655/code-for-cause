import { ScheduleItem } from "./utils/ScheduleItem";

export const Schedule = () => {
	return (
		<div>
			<div className="pt-16 text-center text-4xl font-black p-6 drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
				Schedule
			</div>
			<div className="m-auto rounded-[2rem] w-fit bg-[#D9D9D9] text-black font-bold text-xl overflow-hidden">
				<ScheduleItem time="7:30 am" event="Check-in opens" />
				<ScheduleItem time="8:30 am" event="Opening Ceremony" dark />
				<ScheduleItem time="9:00 am" event="Hacking Begins!" />
				<ScheduleItem
					time="9:15 am"
					event="Workshop: Web Apps with Python using Reflex"
					dark
				/>
				<ScheduleItem
					time="9:45 am"
					event="Workshop: Web Apps with React"
					dark
				/>
				<ScheduleItem
					time="10:15 am"
					event="Workshop: Cross-Platform Apps with Flutter"
				/>
				<ScheduleItem time="12:30 pm" event="Lunch" dark />
				<ScheduleItem time="6:00 pm" event="Dinner" />
				<ScheduleItem time="7:30 pm" event="Judging Begins" dark />
				<ScheduleItem time="9:00 pm" event="Awards Ceremony" />
			</div>
		</div>
	);
};
