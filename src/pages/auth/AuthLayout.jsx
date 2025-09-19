import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import "@fontsource-variable/public-sans";
const AuthLayout = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-[#F8F7FA]">
        <div className="h-fit w-[450px] bg-white px-8 py-10">
          <img src="/weconnect-logo.png" className="mx-auto mb-6" />
          <Suspense fallback={<p>loading</p>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
