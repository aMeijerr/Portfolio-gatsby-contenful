exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query getAllSlugs {
      allContentfulProjects {
        edges {
          node {
            slug
            tech {
              title
            }
          }
        }
      }
    }
  `);

  data.allContentfulProjects.edges.forEach((edge) => {
    const slug = edge.node.slug;
    const techSlug = edge.node.tech.title;
    actions.createPage({
      path: '/project/' + slug,
      component: require.resolve(`./src/templates/single-project.jsx`),
      context: { slug: slug },
    });
    actions.createPage({
      path: '/projects/category/' + techSlug,
      component: require.resolve(`./src/templates/tech-projects.jsx`),
      context: { techSlug: techSlug },
    });
  });
};
