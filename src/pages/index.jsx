import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

const IndexPage = () => {
  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2>Shop</h2>
        <h3>Spend & Regret</h3>
        <Link className={styles.btn} to="/products">My Products</Link>
      </div>
    </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Shopi</title>