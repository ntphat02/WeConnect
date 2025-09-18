import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import "@fontsource-variable/public-sans";
const RootLayout = () => {
  return (
    <div>
      <Suspense fallback={<p>loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default RootLayout;
