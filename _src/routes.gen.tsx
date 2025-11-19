// Generouted, changes to this file will be overridden
import { Fragment } from "react";
import {
  Outlet,
  RouterProvider,
  createLazyRoute,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const root = createRootRoute({ component: Outlet });
const _404 = createRoute({
  getParentRoute: () => root,
  path: "*",
  component: Fragment,
});
const test = createRoute({ getParentRoute: () => root, path: "test" });
const testindex = createRoute({ getParentRoute: () => test, path: "/" }).lazy(
  () =>
    import("./pages/test/index").then((m) =>
      createLazyRoute("/test")({ component: m.default }),
    ),
);
const sos = createRoute({ getParentRoute: () => root, path: "sos" });
const sosindex = createRoute({ getParentRoute: () => sos, path: "/" }).lazy(
  () =>
    import("./pages/sos/index").then((m) =>
      createLazyRoute("/sos")({ component: m.default }),
    ),
);
const index = createRoute({ getParentRoute: () => root, path: "/" }).lazy(() =>
  import("./pages/index").then((m) =>
    createLazyRoute("/")({ component: m.default }),
  ),
);

const config = root.addChildren([
  test.addChildren([testindex]),
  sos.addChildren([sosindex]),
  index,
  _404,
]);

const router = createRouter({ routeTree: config });
export const routes = config;
export const Routes = () => <RouterProvider router={router} />;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
