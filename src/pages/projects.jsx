import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../components/responsive';
import { Seo } from '../components/seo';

const ProjectsPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  const TechList = data.allContentfulProjects.edges
    .map(({ node }) => node.tech.title)
    .reduce((acc, curr) => {
      return acc.includes(curr) ? acc : [...acc, curr];
    }, []);

  return (
    <Layout>
      <section>
        {isMobile ? (
          <nav className={styles.tech__navbar}>
            <Link to={'/projects'}>
              <p>All /</p>
            </Link>
            {TechList.map((tech) => (
              <Link key={tech} to={`/projects/category/${tech}`}>
                <p>{tech} /</p>
              </Link>
            ))}
          </nav>
        ) : (
          <nav className={styles.tech__navbar}>
            <Link to={'/projects'}>
              <h3>All /</h3>
            </Link>
            {TechList.map((tech) => (
              <Link key={tech} to={`/projects/category/${tech}`}>
                <h3>{tech} /</h3>
              </Link>
            ))}
          </nav>
        )}

        {data.allContentfulProjects.edges.map(({ node }) => {
          const slug = node.slug;
          const projectImage = getImage(node.projectImages[2]);

          return (
            <div className={styles.projects__container} key={node.title}>
              <hr />
              {isMobile ? (
                <>
                  <h2>{node.title}</h2>
                  <section className={styles.tech__exp}>
                    <p className={styles.tech__stack}>{node.tech.title}</p>
                    <p>
                      Exp: <b>{node.experience}</b>
                    </p>
                  </section>
                  <p>{node.description}</p>
                  <div className={styles.img__container}>
                    <GatsbyImage image={projectImage} alt={node.title} />
                  </div>
                  <Link to={`/project/${slug}`} className={styles.mobile__link}>
                    <h4>View project</h4>
                  </Link>
                </>
              ) : (
                <div className={styles.container__desktop}>
                  <div className={styles.img__container}>
                    <h2>{node.title}</h2>
                    <GatsbyImage
                      image={projectImage}
                      alt={node.title}
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className={styles.content__desktop}>
                    <section className={styles.tech__exp}>
                      <p className={styles.tech__stack}>{node.tech.title}</p>
                      <p>
                        Exp: <b>{node.experience}</b>
                      </p>
                    </section>
                    <p>{node.description}</p>
                    <Link to={`/project/${slug}`}>
                      <h4>View project</h4>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => <Seo title="Projects page" />;

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
          experience
        }
      }
    }
  }
`;
