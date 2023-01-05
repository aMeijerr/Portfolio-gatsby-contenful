import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/projects.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TechProjectsPage = ({data}) => {
    return (
        <Layout>
            <section>
                {data.allContentfulProjects.edges.map(({ node }) => {
                    const slug = node.slug;
                    const projectImage = getImage(node.projectImages[2]);
                    return (
                        <div className={styles.projects__container} key={node.title}>
                            <hr />
                            <h2>{node.title}</h2>
                            <p>{node.tech.title}</p>
                            <div className={styles.img__container}>
                              <GatsbyImage image={projectImage} alt={node.title}/>
                            </div>
                            <Link to={"/project/" + slug}><h4>View project</h4></Link>
                        </div>
                    )
                })}
            </section>
        </Layout>
    );
    };

export default TechProjectsPage;

export const query = graphql`
query TechProjectPageQuery($techSlug: String) {
  allContentfulProjects(filter: {tech: {title: {eq: $techSlug}}}) {
    edges {
      node {
    title
    slug
    description
    projectImages {
      title
      gatsbyImageData(
            height: 300
            width: 400
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
`;