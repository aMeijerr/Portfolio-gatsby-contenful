import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/projects.module.css";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";
// import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => <strong>{text}</strong>,
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
//   },
// }

const ProjectsPage = ({data}) => {
    return (
        <Layout>
            <section>
            
                {data.allContentfulProjects.edges.map(({ node }) => {
                    const slug = node.slug;
                    // const projectImage = getImage(node.projectImages[0]);
                    return (
                        <div className={styles.projects__container}>
                            <hr />
                            <h2>{node.title}</h2>
                            {/* <p>{node.description}</p> */}
                            <div className={styles.img__container}>
                              {node.projectImages.map((img, i) => {
                              const image = getImage(img);
                              return <GatsbyImage image={image} alt={node.title} key={i}/>
                              })}
                            </div>
                            {/* <GatsbyImage image={projectImage} alt={node.title}/> */}
                            {/* <p>{renderRichText(node.link, options)}</p> */}
                            <Link to={"/project/" + slug}><h4>View project</h4></Link>
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
                height: 350
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