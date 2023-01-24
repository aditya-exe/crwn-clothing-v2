import { createRouter } from "../context";
import { z } from "zod";

export const sendCollectionSchema = z.object({
  itemId: z.number(),
  name: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  routeName: z.string(),
}).array();

export const shopRouter = createRouter()
  .query("get-collection", {
    input: z.object({
      routeName: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.item.findMany({
        where: {
          routeName: input.routeName
        }
      })
    }
  })
  .query("get-four", {
    input: z.object({
      routeName: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.item.findMany({
        where: {
          routeName: input.routeName
        },
        take: 4
      })
    }
  })
  .query("get-one", {
    input: z.object({
      itemId: z.number(),
      routeName: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const item = await ctx.prisma.item.findFirst({
        where: {
          itemId: input.itemId,
          routeName: input.routeName,
        }
      })

      return item;
    }
  })
  .mutation("fill-data", {
    input: sendCollectionSchema,
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.item.createMany({
        data: input
      });
    }
  })