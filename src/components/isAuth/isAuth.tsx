"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const IsAuth = (Component: any) => {
  return function IsAuth(props: any) {
    let [strUser, setStrUser] = useState<string | null>();
    let isAuth: boolean = false;
    useEffect(() => {
      setStrUser(JSON.parse(localStorage.getItem("user") ?? "") ?? null);
    }, [strUser]);
    if (strUser) {
      isAuth = true;
      console.log(strUser);
    }
    useEffect(() => {
      if (isAuth) {
        redirect("/");
      }
    }, [isAuth]);
    console.log(Boolean(strUser), strUser);

    if (isAuth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default IsAuth;
