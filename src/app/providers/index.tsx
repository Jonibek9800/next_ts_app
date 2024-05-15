"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const Providers = ({ children }: IProps) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};

export default Providers;
