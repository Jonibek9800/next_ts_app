"use client"

import { FC, ReactNode } from 'react';
import { Provider } from "react-redux";
import {stores} from "../../store/index";

export const Providers = ({ children }: { children: ReactNode }) => {
    return <Provider store={stores}> { children } </Provider>;
}