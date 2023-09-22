import { FrequentlyAskedQuestions } from "@/components/AttendeesLandingPage/FAQ";
import { UniqueP2 } from "@/components/SponsorsLandingPage/UniqueP2";
import { Hero } from "@/components/SponsorsLandingPage/Hero";
import { Mission } from "@/components/SponsorsLandingPage/Mission";
import { Metadata } from "next";
import { SponsorshipTiers } from "@/components/SponsorsLandingPage/Features";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
	title:
		"Sponsor the First Philanthropic Hackathon for Students - Code for Cause",
	description:
		"Sponsor the first philanthropic hackathon for middle- and high-schoolers— where students in the Bay Area will solve real-world problems for non-profits in need of their skills.",
	openGraph: {
		images: ["https://codeforcause.dev/sponsors-og-image.png"],
		url: "https://codeforcause.dev/sponsors",
		type: "website",
		title: "Reach Students in the Bay Area and Support a Good Cause",
		description:
			"Get your brand in front of 200+ families of middle- and high-schoolers in the Bay Area!",
	},
};

export default function Sponsors() {
	return (
		<>
			<Navbar />
			<Hero />
			<Mission />
			<UniqueP2 />
			<SponsorshipTiers />
			<FrequentlyAskedQuestions />
		</>
	);
}
