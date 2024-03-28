import GetCodeForCause from "@/components/HackathonsPage/GetCodeForCause";
import HowItWorks from "@/components/HackathonsPage/HowItWorks";
import UpcomingHackathons from "@/components/HackathonsPage/UpcomingHackathons";
import HackathonsPageHero from "@/components/HackathonsPage/hero";

const HackathonsPage = () => {
	return (
		<div className="space-y-8 pb-20">
			<HackathonsPageHero />
			<HowItWorks />
			<UpcomingHackathons />
			<GetCodeForCause />
		</div>
	);
};

export default HackathonsPage;
