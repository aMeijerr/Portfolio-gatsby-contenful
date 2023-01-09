import { Link } from "gatsby"
import * as React from "react"
import * as styles from '../styles/home.module.css'
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query ImageQuery {
    allContentfulBackgroundImage {
      edges {
        node {
          bgImage {
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
    `)
    const bgImage = data.allContentfulBackgroundImage.edges[0].node.bgImage.file.url
  return (
    <section className={styles.landing}>
      <div className={styles.landing__content} 
      style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat", 
      backgroundSize: "contain"
    }}>
        <h2>I'm <span className={styles.landing__name}>Alex Meijer</span></h2>
        <h3>Student in Front-end development</h3>
        <Link className={styles.btn} to="/projects">Show projects</Link>
      </div>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Alex Meijer Web Development</title>

// export const HeroImageQuery = graphql`
// query ImageQuery {
//   allContentfulBackgroundImage {
//     nodes {
//       bgImage {
//         file {
//           url
//         }
//       }
//     }
//   }
// }
// `