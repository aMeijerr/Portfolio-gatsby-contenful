import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import * as styles from '../styles/contact.module.css';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../components/responsive';
import { Seo } from '../components/seo';

//kika på react-hook-form eller react-form som NPM-paket

const ContactPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  //Använder react.fragment istället för <>, detta gör att det inte commitas till DOM
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.contact}>
          {data.allContentfulContact.edges.map(({ node }) => {
            return (
              <div className={styles.contact__content}>
                {isMobile ? (
                  <>
                    <h1>{node.title}</h1>
                    <p>{node.description}</p>
                    <h1>{node.email}</h1>
                  </>
                ) : (
                  <>
                    <h2>{node.title}</h2>
                    <p>{node.description}</p>
                    <h2>{node.email}</h2>
                  </>
                )}
              </div>
            );
          })}
        </section>
      </Layout>
    </React.Fragment>
  );
};

export default ContactPage;

export const Head = () => <Seo title="Contact page" />;

export const ContactQuery = graphql`
  query ContactQuery {
    allContentfulContact {
      edges {
        node {
          title
          description
          email
        }
      }
    }
  }
`;
