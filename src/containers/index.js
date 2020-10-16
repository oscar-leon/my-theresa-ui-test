import React from "react";

// lazy loading for webpack code splitting
const Home = React.lazy(() => import("./Home"));
const Detail = React.lazy(() => import("./Detail"));

export { Home, Detail };
