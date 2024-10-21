import { env } from "@/env";
import { createClient, OAuthStrategy } from "@wix/sdk";
import {
  backInStockNotifications,
  checkout,
  currentCart,
  orders,
  recommendations,
} from "@wix/ecom";
import { files } from "@wix/media";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";
import { reviews } from "@wix/reviews";
import { collections, products } from "@wix/stores";

export function getWixClient() {
  return createClient({
    // define the modules we want to use
    modules: {
      products,
      collections,
      currentCart,
      checkout,
      redirects,
      orders,
      recommendations,
      backInStockNotifications,
      reviews,
      members,
      files,
    },
    // define authentication strategies
    auth: OAuthStrategy({
      clientId: env.NEXT_PUBLIC_WIX_CLIENT_ID, // this is guaranteed to be a string
    }),
  });
}
