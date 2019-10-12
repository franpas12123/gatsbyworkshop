/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

const makeRequest = (graphql, request) =>
	new Promise((resolve, reject) => {
		// Query for nodes to use in creating pages.
		resolve(
			graphql(request).then(result => {
				if (result.errors) {
					reject(result.errors)
				}
				return result
			})
		)
	})

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const getMarkdownBlogs = makeRequest(
		graphql,
		`query {
		  allMarkdownRemark{
		    edges {
		      node {
		        id
		        frontmatter{
		          path
		        }
		      }
		    }
		  }
		}
 `
	).then(result => {
		result.data.allMarkdownRemark.edges.forEach(data => {
			createPage({
				path: data.node.frontmatter.path,
				component: path.resolve(`./src/templates/inner-blog.js`),
				context: {
					id: data.node.id,
				},
			})
		})
	})

	return Promise.all([getMarkdownBlogs])
}