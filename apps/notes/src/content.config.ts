import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const titleSchema = z.string().max(60);

const baseSchema = z.object({
	title: titleSchema,
});

const note = defineCollection({
	loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({
		description: z.string().optional(),
		publishDate: z
			.string()
			.datetime({ offset: true }) // Ensures ISO 8601 format with offsets allowed (e.g. "2024-01-01T00:00:00Z" and "2024-01-01T00:00:00+02:00")
			.transform((val) => new Date(val)),
	}),
});

export const collections = { note };
