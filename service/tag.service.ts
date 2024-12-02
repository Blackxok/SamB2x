import { IBlog } from '@/types'
import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
// const token = process.env.DEFAULT_PUBLIC_GRAPHCMS_TOKEN!

export const getBlogByTag = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blog {
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
		}
	`
	try {
		const {
			tag: { blog },
		} = await request<{ tag: { blog: IBlog } }>(endpoint, query, { slug })
		return blog
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
