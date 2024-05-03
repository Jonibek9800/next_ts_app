import { useAppSelector } from "@/hooks/hooks";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const IsAuth = (Component: any) => {
    return function IsAuth(props: any) {
        const strUser = localStorage.getItem("user");
        let isAuth: any = null;
        if (strUser) {
            isAuth = JSON.parse(strUser)
        }
        useEffect(() => {
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