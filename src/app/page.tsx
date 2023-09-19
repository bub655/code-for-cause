import { Hero } from "../components/hero";
import { Unique } from "../components/unique";
import { Navbar } from "../components/navbar";
import { Organizations } from "@/components/organizations";
import { Features } from "@/components/features";
import { Schedule } from "@/components/schedule";
import { Interest } from "@/components/interest";
import { FrequentlyAskedQuestions } from "@/components/frequently-asked-questions";

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
