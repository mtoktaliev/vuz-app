import { useRoutes } from "react-router-dom";

import { RoutesUrls } from "~shared/lib/router/types";
import { HomePage, UniversitiesPages } from "~pages/landing";
import { LandingLayout } from "~pages/layouts/LandingLayout";

const routes = [
  {
    path: RoutesUrls.home,
    element: <LandingLayout />,
    children: [
      { path: RoutesUrls.home, element: <HomePage /> },
      { path: RoutesUrls.universities, element: <UniversitiesPages /> },
    ],
  },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
