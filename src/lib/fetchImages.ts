import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env";

export default async function fetchImages(
	url: string
): Promise<ImagesResults | undefined> {
	try {
		const res = await fetch(url, {
			headers: {
				Authorization: env.PEXELS_API_KEY,
			},
		});

		if (!res.ok) throw new Error("Fetch Images Error! \n");

		const imageResults: ImagesResults = await res.json();

		// console.log(imageResults);
		// Parse data using Zod Schema
		const parsedData = ImagesSchemaWithPhotos.parse(imageResults);

		if (parsedData.total_results === 0) return undefined;
		return parsedData;
	} catch (error) {
		// will show in terminal window
		if (error instanceof Error) console.log(error.stack);
	}
}
