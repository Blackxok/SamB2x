import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
const token = process.env.DEFAULT_PUBLIC_GRAPHCMS_TOKEN!

const query = gql`
	query MyQuery {
		blogs {
			title
			author {
				... on Author {
					name
				}
			}
			category {
				name
				slug
			}
			description
			tag {
				name
				slug
			}
		}
	}
`

export const getBlogs = async () => {
	try {
		const response = await request(endpoint, query, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return response
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
