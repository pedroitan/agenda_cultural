import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    tags: z.array(z.string())
  })
});

const events = defineCollection({
  type: 'data',
  schema: z.object({
    eventName: z.string(),
    date: z.string().transform((str) => new Date(str)),
    location: z.string(),
    description: z.string(),
    image: z.string().optional(),
    registrationLink: z.string().url().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { blog, events };
