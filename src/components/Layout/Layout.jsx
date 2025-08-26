import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
