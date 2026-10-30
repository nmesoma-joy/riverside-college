import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { SiteLayout } from "./site/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage, AcademicsPage, AdmissionsPage, CampusPage, NewsPage, ContactPage, NotFoundPage } from "./pages/InfoPages";

const rootRoute = createRootRoute({
  component: SiteLayout,
  notFoundComponent: NotFoundPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: AcademicsPage,
});
const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admissions",
  component: AdmissionsPage,
});
const campusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/campus-life",
  component: CampusPage,
});
const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news-events",
  component: NewsPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  academicsRoute,
  admissionsRoute,
  campusRoute,
  newsRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });
