import Gallery from "@/app/components/Gallery";

type Props = {
	params: {
		searchTerm: string;
	};
};

export function generateMetadata({ params: { searchTerm } }: Props) {
	return {
		title: ` Results for ${searchTerm}`,
	};
}

export default function SearchResults({ params: { searchTerm } }: Props) {
	return <Gallery topic={searchTerm} />;
}
