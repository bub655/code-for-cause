import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={workSans.className}>{children}</body>
		</html>
	);
}
