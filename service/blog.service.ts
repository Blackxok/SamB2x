import { IArchivedBlog, IBlog } from '@/types'
import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
// const token = process.env.DEFAULT_PUBLIC_GRAPHCMS_TOKEN!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }) {
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
	try {
		const { blogs } = await request<{ blogs: IBlog[] }>(endpoint, query)
		return blogs
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

// type Blog = {
// 	title: string
// 	createdAt: string
// 	slug: string
// }

// type GroupedBlogs = {
// 	[year: string]: {
// 		year: string
// 		blogs: Blog[]
// 	}
// }
export const getArchiveBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }) {
				title
				createdAt
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(endpoint, query)
	console.log(blogs)

	const filteredBlogs = blogs.reduce((acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
		const year = blog.createdAt.substring(0, 4)
		if (!acc[year]) {
			acc[year] = { year, blogs: [] }
		}
		acc[year].blogs.push(blog)
		return acc
	}, {})
	const results: IArchivedBlog[] = Object.values(filteredBlogs)
	return results
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

export const getSearchedBlog = async (title: string) => {
	const query = gql`
		query MyQuery($title: String!) {
			blogs(where: { title_contains: $title }) {
				title
				image {
					url
				}
				createdAt
				slug
			}
		}
	`
	try {
		const { blogs } = await request<{ blogs: IBlog[] }>(endpoint, query, { title })
		return blogs || []
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
