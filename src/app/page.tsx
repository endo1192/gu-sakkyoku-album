"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Mainpage from "../component/Mainpage";
import Loading from "../component/Loading";
import ClientWrapper from "../component/ClientWrapper";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 歌詞と新サイトへの案内リンクを、検索エンジンも読める静的HTMLに含めます。 */}
      <ClientWrapper><Mainpage /></ClientWrapper>
      {/* JavaScript無効時は読み込み演出で本文を覆わないようにします。 */}
      <noscript><style>{"#homepage-loading { display: none; }"}</style></noscript>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="homepage-loading"
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-background"
            aria-hidden="true"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
