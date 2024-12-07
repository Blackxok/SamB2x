import { IBlog } from '@/types'
import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
// const token = process.env.DEFAULT_PUBLIC_GRAPHCMS_TOKEN!

export const getBlogByTag = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blog {
					description
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
				name
			}
		}
	`
	try {
		const { tag } = await request<{ tag: { blog: IBlog[]; name: string } }>(endpoint, query, { slug })
		return tag
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
