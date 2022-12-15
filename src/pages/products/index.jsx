import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/products.module.css'

export default function Products({ data }) {
  return (
    <Layout>
    <div className={styles.product}>
        <h2>Products</h2>
        <h3>Products & Gadgets available</h3>
        
        {data.allContentfulProduct.edges.map(({ node }) => {
            const slug = node.slug;
            return (
                <div>
                    <Link to={"/product/" + slug}><h2>{node.title}</h2></Link>
                    <p>{node.description.description}</p>
                    {/* <img src={node.productImage.url} alt={node.title}/> */}
                    <p>{node.price}</p>
                </div>
            )
        })}
    </div>
    </Layout>
  )
}

export const Head = () => <title>Products</title>

// GraphQL query
export const ProductPageQuery = graphql`
query MyQuery {
  allContentfulProduct {
    edges {
      node {
        title
        slug
        description {
          description
        }
        productImage {
          url
        }
        price
      }
    }
  }
}
`;
