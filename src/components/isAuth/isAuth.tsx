"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react";

const IsAuth = (Component: any) => {
    return function IsAuth(props: any) {
        let strUser = "";
        let isAuth: boolean = false;
        if (strUser) {
            isAuth = JSON.parse(strUser)
        }
        useEffect(() => {
            strUser = localStorage.getItem("user") ?? "";
            if (isAuth) {
                redirect("/")
            }
        }, [isAuth]);

        if (isAuth) {
            return null;
        }

        return <Component {...props} />
    };
}

export default IsAuth;