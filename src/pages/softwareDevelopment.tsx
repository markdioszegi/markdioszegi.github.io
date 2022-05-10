import { graphql } from "gatsby";
import * as React from "react";

const SoftwareDevelopmentPage = () => {
  return (
    <div>
      <h1>Software Dev</h1>
    </div>
  );
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

export default SoftwareDevelopmentPage;
