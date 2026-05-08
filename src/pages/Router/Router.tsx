import { useRoutes } from "react-router-dom";

import { RoutesUrls } from "~shared/lib/router/types";
import {
  HomePage,
  UniversitiesPages,
  OpenDataPages,
  FaqPages,
  RegistrationPage,
  LoginPage,
  DirectionQuizPage,
} from "~pages/landing";
import { LandingLayout } from "~pages/layouts/LandingLayout";
import { NotFoundPage } from "~pages/shared/not-found";

const routes = [
  {
    path: RoutesUrls.home,
    element: <LandingLayout />,
    children: [
      { path: RoutesUrls.home, element: <HomePage /> },
      { path: RoutesUrls.universities, element: <UniversitiesPages /> },
      { path: RoutesUrls.openData, element: <OpenDataPages /> },
      { path: RoutesUrls.faq, element: <FaqPages /> },
      { path: RoutesUrls.registration, element: <RegistrationPage /> },
      { path: RoutesUrls.login, element: <LoginPage /> },
      { path: RoutesUrls.directionQuiz, element: <DirectionQuizPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
