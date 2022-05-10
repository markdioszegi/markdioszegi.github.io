import * as React from "react";
import { useTranslation } from "react-i18next";
import { Links } from "../utils/constants";
import NavLink from "./NavLink";
import { useLocation } from "@reach/router";
import { Link } from "gatsby-plugin-react-i18next";

const TabsSection = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <div className="flex justify-center rounded-br-xl rounded-bl-xl  border-purple-200">
      {Object.values(Links).map((linkName, index) => (
        <div key={index} className={`flex justify-center items-end w-24`}>
          <Link to={`/${linkName}`}>
            <NavLink
              isActive={
                location.pathname.replace(`/${i18n.language}/`, "/") ===
                `/${linkName}`
              }
              text={t(`${linkName}`)}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TabsSection;
