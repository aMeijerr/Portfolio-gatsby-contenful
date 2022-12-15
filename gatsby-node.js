exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query getAllSlugs {
      allContentfulProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allContentfulProduct.edges.forEach((edge) => {
    const slug = edge.node.slug;
    actions.createPage({
      path: '/product/' + slug,
      //   component: path.resolve(`./src/templates/product-template.jsx`),
      component: require.resolve(`./src/templates/single-product.jsx`),
      context: { slug: slug },
    });
  });
};
