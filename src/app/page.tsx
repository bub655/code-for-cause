"use client";

import { Hero } from "../components/AttendeesLandingPage/Hero";
import { Unique } from "../components/AttendeesLandingPage/UniqueValue";
import { Organizations } from "@/components/AttendeesLandingPage/Organizations";
import { Features } from "@/components/AttendeesLandingPage/Features";
import { Schedule } from "@/components/AttendeesLandingPage/Schedule";
import { Interest } from "@/components/AttendeesLandingPage/Interested";
import { FrequentlyAskedQuestions } from "@/components/AttendeesLandingPage/FAQ";
import { useEffect } from "react";
import { analytics } from "@/utils/firebase";

export default function Home() {
	useEffect(() => {
		console.log(analytics);
	}, []);

	return (
		<>
			<Hero />
			<Unique />
			<Organizations />
			<Features />
			<Schedule />
			<Interest />
			<FrequentlyAskedQuestions />
		</>
	);
}
