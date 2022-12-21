import { Link } from "gatsby"
import * as React from "react"
import * as styles from '../styles/home.module.css'
// import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //       query SiteInfo {
  //           site {
  //               siteMetadata {
  //                   title
  //               }
  //           }
  //       }
  //   `)
  //   const { title } = data.site.siteMetadata;
  return (
    <section className={styles.landing}>
      <div className={styles.landing__content}>
        {/* <h1>{title}</h1> */}
        <h2>I'm <span className={styles.landing__name}>Alex Meijer</span></h2>
        <h3>Student in Front-end development</h3>
        <Link className={styles.btn} to="/projects">Show projects</Link>
      </div>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Alex Meijer Web Development</title>