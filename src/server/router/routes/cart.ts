import {createRouter} from "../context";
import {z} from "zod";

export const cartRouter = createRouter()
  .query("get-all-items", {
    resolve: async ({ctx}) => {
      return await ctx.prisma.cart.findMany();
    }
  })
  .mutation("add-single-item", {
    input: z.object({
      id: z.number()
    }),
    resolve: async ({input, ctx}) => {
      const id = input.id;
      if (ctx.session && ctx.session.user?.id !== undefined) {
        return await ctx.prisma.cart.create({
          data: {
            itemId: id,
            userId: ctx.session.user?.id,
          }
        })
      }
    }
  })