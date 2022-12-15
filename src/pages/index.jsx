import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Web developer in training</p>
        <Link className={styles.btn} to="/products">My Products</Link>
      </div>
    </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Shopi</title>