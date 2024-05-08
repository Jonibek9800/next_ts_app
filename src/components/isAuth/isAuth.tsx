"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const IsAuth = (Component: any) => {
  return function IsAuth(props: any) {
    let [strUser, setStrUser] = useState<string>();
    let isAuth: boolean = false;
    useEffect(() => {
      setStrUser(localStorage.getItem("user") ?? "");
    }, []);
    if (strUser) {
      isAuth = true;
    }
    useEffect(() => {
      if (isAuth) {
        redirect("/");
      }
    }, [isAuth]);
    console.log(strUser);
    
    if (isAuth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default IsAuth;
