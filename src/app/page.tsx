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
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center h-screen"
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ClientWrapper><Mainpage /></ClientWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
