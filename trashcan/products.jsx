import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../src/components/Layout"

const ProductPage = ({ data }) => {
  return (
    <Layout>
    <main>
      <h1>This is Products</h1>

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
    </main>
    </Layout>
  )
}

export default ProductPage

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