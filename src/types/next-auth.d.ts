import { DefaultSession } from "next-auth";
import ShopItemType from "./shop-item-type";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
    cartItems: ShopItemType[];
  }
}
