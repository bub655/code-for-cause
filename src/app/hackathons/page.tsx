"use client";

import GetCodeForCause from "@/components/HackathonsPage/GetCodeForCause";
import HowItWorks from "@/components/HackathonsPage/HowItWorks";
import UpcomingHackathons from "@/components/HackathonsPage/UpcomingHackathons";
import HackathonsPageHero from "@/components/HackathonsPage/hero";
import FrequentlyAskedQuestions from "@/components/HomePage/FAQ";

import { analytics } from "@/utils/firebase";
import { useEffect } from "react";

const HackathonsPage = () => {
	useEffect(() => {
		console.log(analytics);
	}, []);

	return (
		<div className="space-y-8 pb-20">
			<HackathonsPageHero />
			<HowItWorks />
			<UpcomingHackathons />
			<GetCodeForCause />
			<FrequentlyAskedQuestions />
		</div>
	);
};

export default HackathonsPage;
