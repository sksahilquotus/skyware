"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideHeaderOnly = ["/sign-in","/sign-up"];
  const hideBoth = ["/help-desk"];

  const shouldHideHeader = hideHeaderOnly.includes(pathname) || hideBoth.includes(pathname);
  const shouldHideFooter = hideBoth.includes(pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
      {!shouldHideFooter && (
        <Footer
          companyName="Skyware Hotels"
          address="5100 Buckeystown Pike, Frederick, MD 21704"
          phone="877-759-9329"
          email="sales@skywaresystems.com"
          year={2025}
        />
      )}
    </>
  );
}
