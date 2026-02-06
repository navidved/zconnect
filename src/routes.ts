import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Basket } from "./pages/Basket";
import { Checkout } from "./pages/Checkout";
import { Social } from "./pages/Social";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Wishlist } from "./pages/Wishlist";
import { Orders } from "./pages/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/explore",
    Component: Explore,
  },
  {
    path: "/basket",
    Component: Basket,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/social",
    Component: Social,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/settings",
    Component: Settings,
  },
  {
    path: "/wishlist",
    Component: Wishlist,
  },
  {
    path: "/orders",
    Component: Orders,
  },
]);