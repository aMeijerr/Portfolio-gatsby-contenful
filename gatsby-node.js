exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query getAllSlugs {
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allContentfulProjects.edges.forEach((edge) => {
    const slug = edge.node.slug;
    actions.createPage({
      path: '/project/' + slug,
      component: require.resolve(`./src/templates/single-project.jsx`),
      context: { slug: slug },
    });
  });
};
