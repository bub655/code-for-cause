import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Code for Cause",
	description: "Helping local businesses through a hackathon",
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
