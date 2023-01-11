import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../components/responsive';

const ProjectsPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  let TechList = [];
  return (
    <Layout>
      <section>
        {data.allContentfulProjects.edges.forEach((edge) => {
          const projectTech = edge.node.tech.title;
          TechList.push(projectTech);
        })}
        {console.log(TechList[0])}

        <nav className={styles.tech__navbar}>
          <Link to={'/projects/category/' + TechList[0]}>
            <h3>Javascript</h3>
          </Link>
          <Link to={'/projects/category/' + TechList[1]}>
            <h3>Python</h3>
          </Link>
          <Link to={'/projects/category/' + TechList[2]}>
            <h3>Vue</h3>
          </Link>
        </nav>

        {data.allContentfulProjects.edges.map(({ node }) => {
          const slug = node.slug;
          const projectImage = getImage(node.projectImages[2]);

          return (
            <>
              {isMobile ? (
                <div className={styles.projects__container} key={node.title}>
                  <hr />
                  <h2>{node.title}</h2>
                  <p>{node.tech.title}</p>
                  <p>{node.description}</p>
                  <div className={styles.img__container}>
                    <GatsbyImage image={projectImage} alt={node.title} />
                  </div>
                  <Link to={'/project/' + slug}>
                    <h4>View project</h4>
                  </Link>
                </div>
              ) : (
                <div className={styles.projects__container} key={node.title}>
                  <hr />
                  <div className={styles.container__desktop}>
                    <div className={styles.img__container}>
                      <GatsbyImage image={projectImage} alt={node.title} />
                    </div>
                    <div className={styles.content__desktop}>
                      <h2>{node.title}</h2>
                      <p>{node.tech.title}</p>
                      <p>{node.description}</p>
                      <Link to={'/project/' + slug}>
                        <h4>View project</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </>
            // <div className={styles.projects__container} key={node.title}>
            //     <hr />
            //     <h2>{node.title}</h2>
            //     <p>{node.description}</p>
            //     <div className={styles.img__container}>
            //       <GatsbyImage image={projectImage} alt={node.title}/>
            //     </div>
            //     <Link to={"/project/" + slug}><h4>View project</h4></Link>
            // </div>
          );
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
`;
