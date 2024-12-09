import { IAuthor } from '@/types'
import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthors = async () => {
	const query = gql`
		query MyQuery {
			authors {
				name
				bio
				avatar {
					url
				}
				id
				blogs {
					id
				}
			}
		}
	`
	try {
		const { authors } = await request<{ authors: IAuthor[] }>(endpoint, query)
		return authors
	} catch (error) {
		console.error('Error fetching authors:', error)
		return []
	}
}

export const getDetailedAuthor = async (id: string) => {
	const query = gql`
		query MyQuery($id: ID) {
			author(where: { id: $id }) {
				bio
				avatar {
					url
				}
				id
				name
				blogs {
					contentHtml {
						html
					}
					description
					createdAt
					image {
						url
					}
					slug
					tag {
						name
						slug
					}
					category {
						slug
						name
					}
					title
					author {
						... on Author {
							name
							bio
							avatar {
								url
							}
							id
						}
					}
				}
			}
		}
	`

	try {
		const { author } = await request<{ author: IAuthor }>(endpoint, query, { id })
		return author
	} catch (error) {
		console.error('Error fetching author details:', error)
		return null
	}
}

// ID author -- cm45rzxwyb1wc07n2ryegb3ft
