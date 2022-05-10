import * as React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

export default ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto relative flex flex-col flex-grow">
        <NavBar />

        <motion.div
          className="h-full flex-grow"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};
