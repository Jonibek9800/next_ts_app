import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "../shared/ui/fonts";
import Layouts from "../shared/ui/layout/layout";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
