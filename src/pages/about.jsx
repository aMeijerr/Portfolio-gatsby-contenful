import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import * as styles from "../styles/about.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useStaticQuery } from "gatsby";

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
}

export default function AboutPage() {
  const data = useStaticQuery(AboutQuery)
  const { title, description, education, experience } = data.allContentfulAboutMe.edges[0].node;
  const profileImage = getImage(data.allContentfulAboutMe.edges[0].node.profileImage);
  return (
  <Layout>
    <section>
        {data.allContentfulAboutMe.edges.map(({ node }) => {
            return (
                <div className={styles.about__container}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <GatsbyImage image={profileImage} alt={node.title}/>
                    <p>{renderRichText(education, options)}</p>
                    <p>{renderRichText(experience, options)}</p>
                </div>
            )
        })}
    </section>
  </Layout>
)
}

const AboutQuery = graphql`
query MyQuery {
  allContentfulAboutMe {
    edges {
      node {
        title
        description
        profileImage {
          gatsbyImageData(
            height: 450,
            width: 450
            resizingBehavior: FILL
            placeholder: BLURRED
          )
        }
        education {
          raw
        }
        experience {
          raw
        }
      }
    }
  }
}
`

