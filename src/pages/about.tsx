import { graphql } from "gatsby";
import * as React from "react";
import WelcomeSection from "../components/WelcomeSection";

const AboutPage = () => {
  return <WelcomeSection />;
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default AboutPage;
