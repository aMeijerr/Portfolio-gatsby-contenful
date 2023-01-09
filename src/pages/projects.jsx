import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/projects.module.css";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";
// import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import Vue from "../assets/Vue.svg";
// import Javascript from "../assets/JavaScript.svg";
// import Python from "../assets/Angular.svg";

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => <strong>{text}</strong>,
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
//   },
// }

const ProjectsPage = ({data}) => {
  let TechList = []
    return (
        <Layout>
            <section>
            {data.allContentfulProjects.edges.forEach((edge) => {
              const projectTech = edge.node.tech.title;
                TechList.push(projectTech)
            })}
            {console.log(TechList[0])}
        
            {/* {TechList.map((tech, i) => {
              console.log(tech, i)
              return (
                <div className={styles.tech}>
                  <img src={tech} alt="css-icon" width="40" height="40"/>
                </div>
              )
            }
            )} */}
            <nav className={styles.tech__navbar}>
                  <Link to={"/projects/category/" + TechList[0]}><h4>Javascript</h4></Link>
                  <Link to={"/projects/category/" + TechList[1]}><h4>Python</h4></Link>
                  <Link to={"/projects/category/" + TechList[2]}><h4>Vue</h4></Link>
            </nav>

                {data.allContentfulProjects.edges.map(({ node }) => {
                    const slug = node.slug;
                    const techSlug = node.tech.title;
                    console.log(techSlug)
                    const projectImage = getImage(node.projectImages[2]);
                    return (
                        <div className={styles.projects__container} key={node.title}>
                          {/* <div className={styles.tech}>
                              <img src={TechList[0]} alt="css-icon" width="40" height="40"/>
                          </div> */}
                            <hr />
                            <h2>{node.title}</h2>
                            <p>{node.tech.title}</p>
                            <p>{node.description}</p>
                            <div className={styles.img__container}>
                              <GatsbyImage image={projectImage} alt={node.title}/>
                              {/* {node.projectImages.map((img, i) => {
                              const image = getImage(img);
                              return <GatsbyImage image={image} alt={node.title} key={i}/>
                              })} */}
                            </div>
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
            tech {
              title
            }
          }
        }
      }
    }
`