import "./globals.css";
import type { Metadata } from "next";

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
				<main className="max-w-6xl mx-auto ">{children}</main>
			</body>
		</html>
	);
}
