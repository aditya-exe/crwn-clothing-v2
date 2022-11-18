import { createRouter } from "../context";
import { z } from "zod";
import { Prisma } from "@prisma/client";

export const cartRouter = createRouter()
  .query("get-all-items", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.cart.findMany();
    }
  })
  .mutation("add-cart", {
    input: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        imageUrl: z.string(),
        price: z.number(),
        routeName: z.string(),
        quantity: z.number(),
      })
    ),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.cart.create({
        data:{
          userId: ctx.session?.user?.id!!,
          Items: input
        }
      })
    }
  })
