import { createRouter } from "../context";
import { z } from "zod";

export const shopRouter = createRouter()
    .query("get-all", {
        input: z.object({
            collection: z.string()
        }),
        resolve: async ({ input, ctx }) => {
            const collection = input.collection;

            if (collection === "hats") {
                return await ctx.prisma.hats.findMany();
            } else if (collection === "sneakers") {
                return await ctx.prisma.sneakers.findMany();
            } else if (collection === "jackets") {
                return await ctx.prisma.jackets.findMany();
            } else if (collection === "womens") {
                return await ctx.prisma.womens.findMany();
            } else if (collection === "mens") {
                return await ctx.prisma.mens.findMany();
            }
        }
    })
    .query("get-four", {
        input: z.object({
            collection: z.string()
        }),
        resolve: async ({ input, ctx }) => {
            const collection = input.collection;

            if (collection === "hats") {
                return await ctx.prisma.hats.findMany({
                    take: 4,
                });
            } else if (collection === "sneakers") {
                return await ctx.prisma.sneakers.findMany({
                    take: 4,
                });
            } else if (collection === "jackets") {
                return await ctx.prisma.jackets.findMany({
                    take: 4,
                });
            } else if (collection === "womens") {
                return await ctx.prisma.womens.findMany({
                    take: 4,
                });
            } else if (collection === "mens") {
                return await ctx.prisma.mens.findMany({
                    take: 4,
                });
            }
        }
    })
    .mutation("fill", {
        input: z.object(
            {
                id: z.number(),
                name: z.string(),
                imageUrl: z.string(),
                price: z.number(),
            }),
        resolve: async ({ input, ctx }) => {
            return await ctx.prisma.mens.create({
                data: {
                    id: input.id,
                    name: input.name,
                    imageUrl: input.imageUrl,
                    price: input.price,
                }
            })
        }
    })
