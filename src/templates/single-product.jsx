import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import * as styles from '../styles/single-product.module.css';

const SingleProductPage = ({ data }) => {
  const product = data.contentfulProduct;
  const image = getImage(product.productImage);
  console.log(product);

  return (
    <>
      <Link to="/products">Back to products</Link>
        <main className={styles.single__product}>
          <h2>{product.title}</h2>
          <GatsbyImage image={image} alt={product.title}/>
          <p>{product.description.description}</p>
          <p>{product.price} SEK</p>
        </main>
    </>
  );
};

export default SingleProductPage;

export const Head = () => <title>Dynamiskt</title>;

//Se över denna, finns ännu ingen slug i contentful
export const query = graphql`
  query SingleProductPageQuery($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      description {
        description
      }
      price
      productImage {
        gatsbyImageData(
          height: 450, 
          width: 450,
          resizingBehavior: FILL,
          placeholder: BLURRED )
        }
    }
  }
`;
