import { useRoutes } from "react-router-dom";

import { RoutesUrls } from "~shared/lib/router/types";
import { HomePage } from "~pages/landing/home";
import { LandingLayout } from "../layouts/LandingLayout";

const routes = [
  {
    path: RoutesUrls.home,
    element: <LandingLayout />,
    children: [{ path: RoutesUrls.home, element: <HomePage /> }],
  },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
