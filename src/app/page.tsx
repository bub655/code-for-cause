import { Hero } from "../components/AttendeesLandingPage/Hero";
import { Unique } from "../components/AttendeesLandingPage/UniqueValue";
import { Organizations } from "@/components/AttendeesLandingPage/Organizations";
import { Features } from "@/components/AttendeesLandingPage/Features";
import { Schedule } from "@/components/AttendeesLandingPage/Schedule";
import { Interest } from "@/components/AttendeesLandingPage/Interested";
import { FrequentlyAskedQuestions } from "@/components/AttendeesLandingPage/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Philanthropic Hackathon for Students - Code for Cause",
	description:
		"Join the first philanthropic hackathon for middle- and high-schoolers where students in the Bay Area will solve real-world problems for non-profits in need of their skills.",
	openGraph: {
		images: ["https://codeforcause.dev/og-image.png"],
		url: "https://codeforcause.dev",
		type: "website",
		title: "Attend the First Philanthropic Hackathon for Students",
		description:
			"Middle- and high-schoolers get 12 hours to solve real-world problems for non-profits in need of their skills.",
	},
};

export default function Home() {
	return (
		<>
			<Hero />
			<Unique />
			{/* <Organizations /> */}
			<Features />
			<Schedule />
			<Interest />
			<FrequentlyAskedQuestions />
		</>
	);
}
