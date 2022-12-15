import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import * as styles from '../../styles/products.module.css'

export default function Products({ data }) {
  return (
    <Layout>
      <h2>Products</h2>
      <h3>Products & Gadgets available</h3>
      <div className={styles.product}>
          
          {data.allContentfulProduct.edges.map(({ node }) => {
              const slug = node.slug;
              const image = getImage(node.productImage);
              return (
                  <div className={styles.product__card}>
                    
                      <GatsbyImage image={image} alt={node.title}/>
                   
                    {/* <div className={styles.product__image}>
                      <img src={node.productImage.resize.src} alt={node.title}/>
                    </div> */}
                        <Link to={"/product/" + slug}><h2>{node.title}</h2></Link>
                        <p>{node.description.description}</p>
                        <p>{node.price} SEK</p>
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
        price
        productImage {
          gatsbyImageData(
            height: 350, 
            width: 350,
            resizingBehavior: FILL,
            placeholder: BLURRED )
        }
      }
    }
  }
}
`;
