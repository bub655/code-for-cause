"use client";

import { Hero } from "../components/HomePage/Hero";
import { useEffect } from "react";
import { analytics } from "@/utils/firebase";
import WhatIs from "@/components/HomePage/WhatIs";
import UpcomingHackathons from "@/components/HackathonsPage/UpcomingHackathons";
import FrequentlyAskedQuestions from "@/components/HomePage/FAQ";

export default function Home() {
	useEffect(() => {
		console.log(analytics);
	}, []);

	return (
		<div className="space-y-10 pt-10">
			<Hero />
			<WhatIs />
			<UpcomingHackathons />
			<FrequentlyAskedQuestions />
		</div>
	);
}
