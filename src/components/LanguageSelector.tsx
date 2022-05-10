import * as React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();

  const handleChange = (language: string) => {
    changeLanguage(language);
  };

  return (
    <div className="absolute right-2 top-2 hidden md:block">
      <Button>
        <FontAwesomeIcon className="fa-2x" icon={faGlobe} />
      </Button>

      <div className="">
        {languages.map((language) => (
          <Button key={language} onClick={() => handleChange(language)}>
            {t(language)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
