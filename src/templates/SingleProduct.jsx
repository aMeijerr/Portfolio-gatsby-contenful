import * as React from 'react';
import { Link, graphql } from 'gatsby';

const SingleProductPage = ({ data }) => {
  const product = data.contentfulProduct;

  return (
    <main className="single-product">
      <Link to="/products">Single Product page</Link>
      <h1>{product.title}</h1>
    </main>
  );
};

export default SingleProductPage;

export const Head = () => <title>Dynamiskt</title>;

//Se över denna, finns ännu ingen slug i contentful
export const query = graphql`
  query SingleProductPageQuery($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      title
    }
  }
`;
