// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { shopRouter } from "./routes/shopRoutes";
import { cartRouter } from "./routes/cartRoutes";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("shop.", shopRouter)
  .merge("cart.", cartRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
