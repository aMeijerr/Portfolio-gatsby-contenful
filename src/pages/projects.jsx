import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/projects.module.css";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
}

const ProjectsPage = ({data}) => {
    return (
        <Layout>
            <section>
                {data.allContentfulProjects.edges.map(({ node }) => {
                    const slug = node.slug;
                    const projectImage = getImage(node.projectImages[0]);
                    return (
                        <div className={styles.wrapper}>
                            <h1>Projects</h1>
                            <hr />
                            <Link to={"/project/" + slug}><h2>{node.title}</h2></Link>
                            <p>{node.description}</p>
                            <GatsbyImage image={projectImage} alt={node.title}/>
                            <p>{renderRichText(node.link, options)}</p>
                        </div>
                    )
                })}
            </section>
        </Layout>
    );
    };

export default ProjectsPage;

export const ProjectsPageQuery = graphql`
query ProjectsQuery {
    allContentfulProjects {
        edges {
          node {
            title
            slug
            description
            projectImages {
              gatsbyImageData(
                height: 450
                resizingBehavior: PAD
                placeholder: BLURRED
                layout: FIXED
              )
            }
            link {
              raw
            }
          }
        }
      }
    }
`