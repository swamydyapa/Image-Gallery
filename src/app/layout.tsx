import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const revalidate = 3600;

export const metadata: Metadata = {
	title: "Next.JS Image Gallery",
	description: "This Project is a Image Gallery developed by using nextJS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="max-w-6xl mx-auto ">{children}</main>
			</body>
		</html>
	);
}
