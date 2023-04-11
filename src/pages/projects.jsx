import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../components/responsive';
import { SEO } from '../components/seo';

const ProjectsPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  let TechList = [];
  return (
    <Layout>
      <section>
        {/* Skapar en lista med alla tekniker som finns i projekt */}
        {data.allContentfulProjects.edges.forEach((edge) => {
          const projectTech = edge.node.tech.title;
          if (!TechList.includes(projectTech)) {
            TechList.push(projectTech);
          }
        })}

        {/* Skriver ut alla tekniker som finns i projektet som en lista */}
        {isMobile ? (
          <nav className={styles.tech__navbar}>
            <Link to={'/projects'}>
              <p>All</p>
            </Link>
            {TechList.map((tech) => {
              return (
                <Link to={'/projects/category/' + tech}>
                  <p>{tech}</p>
                </Link>
              );
            })}
          </nav>
        ) : (
          <nav className={styles.tech__navbar}>
            <Link to={'/projects'}>
              <h3>All /</h3>
            </Link>
            {TechList.map((tech) => {
              return (
                <Link to={'/projects/category/' + tech}>
                  <h3>{tech} /</h3>
                </Link>
              );
            })}
          </nav>
        )}

        {/* Skriver ut alla projekt, använder reverse för att skriva ut senaste projektet först*/}
        {data.allContentfulProjects.edges.reverse().map(({ node }) => {
          const slug = node.slug;
          // Skapar variabel som endast visar den 3e bilden i projektet
          const projectImage = getImage(node.projectImages[2]);

          return (
            <>
              {isMobile ? (
                <div className={styles.projects__container} key={node.title}>
                  <hr />
                  <h2>{node.title}</h2>
                  {/* <p className={styles.tech__stack}>{node.tech.title}</p> */}
                  <p>{node.description}</p>
                  <div className={styles.img__container}>
                    <GatsbyImage image={projectImage} alt={node.title} />
                  </div>
                  <Link to={'/project/' + slug} className={styles.mobile__link}>
                    <h4>View project</h4>
                  </Link>
                </div>
              ) : (
                <div className={styles.projects__container} key={node.title}>
                  <hr />
                  <div className={styles.container__desktop}>
                    <div className={styles.img__container}>
                      <GatsbyImage
                        image={projectImage}
                        alt={node.title}
                        imgStyle={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className={styles.content__desktop}>
                      <h2>{node.title}</h2>
                      <p className={styles.tech__stack}>{node.tech.title}</p>
                      <p>{node.description}</p>
                      <Link to={'/project/' + slug}>
                        <h4>View project</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => <SEO title="Projects page" />;

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
              height: 280
              width: 330
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
