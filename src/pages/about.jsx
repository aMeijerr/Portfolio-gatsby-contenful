import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import * as styles from "../styles/about.module.css";

export default function AboutPage({data}) {
    return (
    <Layout>
      <div>
          
          {data.allContentfulAboutUs.edges.map(({ node }) => {
              return (
                  <div className={styles.about__container}>
                      <h2>{node.title}</h2>
                      <p>{node.description.description}</p>
                  </div>
              )
          })}
      </div>
    </Layout>
  )
}

// export default AboutPage;

export const AboutQuery = graphql`
query AboutUsQuery {
    allContentfulAboutUs {
      edges {
        node {
          title
          description {
            description
          }
        }
      }
    }
  }
`