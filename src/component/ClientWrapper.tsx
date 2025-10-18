"use client";

import { useEffect, useState } from "react";
import Cheader from "./header";
import Cfooter from "./footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <Cheader />
      <main style={{ paddingTop: headerHeight }}>{children}</main>
      <Cfooter />
    </>
  );
}
