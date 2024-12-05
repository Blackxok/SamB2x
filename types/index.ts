import { ReactNode } from 'react'
export interface ChildProps {
	children: ReactNode
}

export interface IBlog {
	title: string
	author: IAuthor
	category: ICatandTag
	description: string
	tag: ICatandTag
	image: { url: string }
	createdAt: string
	contentHtml: { html: string }
	slug: string
}
export interface IAuthor {
	name: string
	avatar: { url: string }
	bio: string
	blogs: IBlog[]
	id: string
}

export interface ICatandTag {
	name: string
	slug: string
}

export interface IArchivedBlog {
	year: string
	blogs: IBlog[]
}
