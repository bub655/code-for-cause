import { Hero } from "../components/AttendeesLandingPage/Hero";
import { Unique } from "../components/AttendeesLandingPage/UniqueValue";
import { Navbar } from "../components/Navbar";
import { Organizations } from "@/components/AttendeesLandingPage/Organizations";
import { Features } from "@/components/AttendeesLandingPage/Features";
import { Schedule } from "@/components/AttendeesLandingPage/Schedule";
import { Interest } from "@/components/AttendeesLandingPage/Interested";
import { FrequentlyAskedQuestions } from "@/components/AttendeesLandingPage/FAQ";

export default function Home() {
	return (
		<>
			<Navbar />
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
