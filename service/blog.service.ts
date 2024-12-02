import { IBlog } from '@/types'
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
					avatar {
						url
					}
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
			image {
				url
			}
			createdAt
			contentHtml {
				html
			}
			slug
		}
	}
`

export const getBlogs = async () => {
	try {
		const { blogs } = await request<{ blogs: IBlog[] }>(endpoint, query, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return blogs
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

export const getBlogBySlug = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					... on Author {
						name
						avatar {
							url
						}
						bio
					}
				}
				contentHtml {
					html
				}
				createdAt
				image {
					url
				}
				slug
				tag {
					name
					slug
				}
				title
				description
			}
		}
	`
	try {
		const { blog } = await request<{ blog: IBlog }>(endpoint, query, { slug })
		return blog
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
