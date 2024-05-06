"use client"

import { stores } from "@/shared/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type IProps = {
    children: ReactNode,
}

const Providers = ({ children }: IProps) => {
    return (
        <Provider store={stores}>
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </Provider>);
}

export default Providers;