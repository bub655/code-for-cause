import { ScheduleItem } from "./utils/ScheduleItem";

export const Schedule = () => {
	return (
		<div className="p-4">
			<div className="pt-16 text-center text-4xl font-black p-6 drop-shadow-[3px_4px_var(--tw-shadow-color)] shadow-[#896FBC]">
				Schedule
			</div>
			<div className="m-auto py-6 rounded-[2rem] w-fit bg-[#D9D9D9] text-black font-bold text-xl overflow-hidden">
				<div className="text-sm text-center pb-2 font-bold md:w-96 m-auto mx-2">
					We're working on adding in more guest speakers and workshops, so stay
					tuned!
				</div>
				<div>
					<ScheduleItem time="7:30 am" event="Check-in opens" />
					<ScheduleItem time="8:30 am" event="Opening Ceremony" dark />
					<ScheduleItem time="9:00 am" event="Hacking Begins!" />
					<ScheduleItem time="9:30 am" event="Workshop Slot 1" dark />
					<ScheduleItem time="10:30 am" event="Workshop Slot 2" />
					<ScheduleItem time="12:30 pm" event="Lunch" dark />
					<ScheduleItem time="2:30 pm" event="Speaker Slot 1" />
					<ScheduleItem time="6:00 pm" event="Dinner" dark />
					<ScheduleItem time="7:30 pm" event="Judging Begins" />
					<ScheduleItem time="9:00 pm" event="Awards Ceremony" dark />
				</div>
			</div>
		</div>
	);
};
