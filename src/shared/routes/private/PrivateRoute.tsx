"use client";
import { useAuthStore } from "@/shared/store/auth/auth";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

const PrivateRoute = (Component: any) => {
  return function PrivateRoute() {
    const isAuth = useAuthStore((state) => state.isAuth);

    useEffect(() => {
      if (!isAuth) {
        redirect("/auth");
      }
    }, [isAuth]);

    if (!isAuth) {
      return null;
    }

    return <Component />;
  };
};

export default PrivateRoute;
