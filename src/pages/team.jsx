import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/team.module.css";
// import { useMediaQuery } from "react-responsive";
// import { DeviceSize } from "../components/responsive";

//Se över css här och i products för responsivitet

export default function TeamPage({data}) {
  // const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    return (
    <Layout>
      <div>
          
          {data.allContentfulTheTeam.edges.map(({ node }) => {
            const image = getImage(node.profileImage);
              return (
                <article className={styles.employee__card}>
                      <GatsbyImage image={image} alt={node.name}/>
                  <div className={styles.employee__info}>
                      <h1>{node.name}</h1>
                      <h3>{node.profession}</h3>
                      <p>{node.description}</p>
                  </div>
                </article>
              )
          })}
      </div>
    </Layout>
  )
}

export const TeamQuery = graphql`
query TeamQuery {
    allContentfulTheTeam {
      edges {
        node {
          name
          profession
          description
          profileImage {
            gatsbyImageData(
              height: 350, 
              width: 350,
              resizingBehavior: FILL,
              placeholder: BLURRED )
          }
        }
      }
    }
  }
`