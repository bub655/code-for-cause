import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://codeforcause.dev"),
	title: "Philanthropic Hackathon for Students - Code for Cause",
	alternates: {
		canonical: "/",
	},
	description:
		"Join the first philanthropic hackathon for high-schoolers! Students in the Bay Area will solve real-world problems for non-profits in need of their skills.",
	openGraph: {
		images: "/og-image.png",
		url: "https://codeforcause.dev",
		type: "website",
		title: "Attend the First Philanthropic Hackathon for Students",
		description:
			"High-schoolers get 12 hours to solve real-world problems for non-profits in need of their skills.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={workSans.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
