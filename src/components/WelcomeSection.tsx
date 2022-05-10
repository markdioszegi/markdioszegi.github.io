import * as React from "react";
//import profile from "../assets/profile.jpg";
import coding from "../assets/coding.mp4";
import LanguageSelector from "./LanguageSelector";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const WelcomeSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`relative flex flex-col mt-8 w-full items-center transition-all`}
    >
      {/* <video
        className="absolute top-0 left-0 w-full h-full -z-10 p-16 object-cover"
        src={coding}
        autoPlay
        muted
        loop
      ></video> */}

      <LanguageSelector />

      <StaticImage
        className="w-64 rounded-full shadow-lg object-cover"
        src="../assets/profile.jpg"
        alt="Profile picture"
      />

      <div className="space-y-4 text-center mt-8 p-4 rounded-lg bg-blue-200 bg-opacity-80">
        <h1 className="text-4xl font-bold">{t("greeting.line1")}</h1>
        <h1 className="text-4xl">
          {t("greeting.line2")} <span className="text-4xl">{t("name")}.</span>
        </h1>
      </div>
    </div>
  );
};

export default WelcomeSection;
