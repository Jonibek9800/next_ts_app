"use client";
import { useAuthStore } from "@/shared/store/auth/auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const IsAuth = (Component: any) => {
  return function IsAuth(props: any) {
    const isAuth = useAuthStore(state => state.isAuth);
    useEffect(() => {
      if (isAuth) {
        redirect("/");
      }
    }, [isAuth]);
    console.log(isAuth);

    if (isAuth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default IsAuth;
