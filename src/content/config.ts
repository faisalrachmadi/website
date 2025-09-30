import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    readTime: z.string(),
    author: z.string().default('Faisal Rachmadi'),
  }),
});

export const collections = {
  'blog': blogCollection,
};