import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>.
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
