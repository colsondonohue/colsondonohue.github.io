const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allPhotosJson(limit: 1000) {
              edges {
                node {
                  name
                  photos
                }
                next {
                  name
                }
                previous {
                  name
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors));
        }

        const postTemplate = path.resolve(`src/templates/photo-page.js`);
        result.data.allPhotosJson.edges.forEach(edge => {
          createPage({
            path: `/photos/${edge.node.name}/`,
            component: postTemplate,
            context: {
              name: edge.node.name,
              photos: edge.node.photos,
              next: edge.next,
              previous: edge.previous
            }
          });
        });
        return;
      })
    );
  });
};
