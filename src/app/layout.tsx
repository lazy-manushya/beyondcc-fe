"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "~/styles/libs/Registry";
import MainLayout from "~/features/layouts/MainLayout";

import "~/styles/reset.css";
import "~/styles/core.css";
import "~/styles/typography.css";
import "~/styles/color.css";
import "~/styles/animations.css";
import "~/styles/scroll.css";
import "~/styles/sizing.css";
import "~/styles/utils.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Beyond CC",
//   description: "Beyond CC",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StyledComponentsRegistry>
          <MainLayout>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
