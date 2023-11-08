import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next Image Gallery",
	description: "Image Gallery using nextJS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main className="max-w-6xl mx-auto">{children}</main>
			</body>
		</html>
	);
}
