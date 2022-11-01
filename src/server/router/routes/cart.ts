import { createRouter } from "../context";
import { z } from "zod";

export const cartRouter = createRouter()
  .query("get-all-items", {
    resolve: async ({ctx})=>{
      return await ctx.prisma.car
    }
  })