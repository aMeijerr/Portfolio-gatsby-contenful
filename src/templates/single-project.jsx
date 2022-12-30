import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import * as styles from '../styles/single-project.module.css';

const SingleProjectPage = ({ data }) => {
  const project = data.contentfulProjects;
  const image = getImage(project.projectImages[0]);
  console.log(project)

  return (
    <Layout>
        <main>
          <h2>{project.title}</h2>
          <GatsbyImage image={image} alt={project.title}/>
          <p>{project.description}</p>
          {/* <p>link???</p> */}
        </main>
    </Layout>
  );
};

export default SingleProjectPage;

export const Head = () => <title>Dynamiskt</title>;

//Se över denna, finns ännu ingen slug i contentful
export const query = graphql`
  query SingleProjectPageQuery($slug: String) {
  contentfulProjects(slug: { eq: $slug }) {
    title
    slug
    description
    projectImages {
      gatsbyImageData(
        height: 450, 
        width: 450,
        resizingBehavior: FILL,
        placeholder: BLURRED )
      }
  }
}
`;