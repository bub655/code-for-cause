import { FrequentlyAskedQuestions } from "@/components/SponsorsLandingPage/FAQ";
import { UniqueP2 } from "@/components/SponsorsLandingPage/UniqueP2";
import { Hero } from "@/components/SponsorsLandingPage/Hero";
import { Mission } from "@/components/SponsorsLandingPage/Mission";
import { Metadata } from "next";
import { SponsorshipTiers } from "@/components/SponsorsLandingPage/Tiers";

export const metadata: Metadata = {
	title:
		"Sponsor the First Philanthropic Hackathon for Students - Code for Cause",
	description:
		"Sponsor the first philanthropic hackathon for high-schoolers! Students in the Bay Area will solve real-world problems for non-profits in need of their skills.",
	openGraph: {
		images: ["https://codeforcause.dev/sponsors-og-image.png"],
		url: "https://codeforcause.dev/sponsors",
		type: "website",
		title: "Reach Students in the Bay Area and Support a Good Cause",
		description:
			"Get your brand in front of 200+ families of high-schoolers in the Bay Area!",
	},
};

export default function Sponsors() {
	return (
		<>
			<Hero />
			<Mission />
			<UniqueP2 />
			<SponsorshipTiers />
			<FrequentlyAskedQuestions />
		</>
	);
}
