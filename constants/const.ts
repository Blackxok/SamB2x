import { Contact2, FileCode2, FolderArchive, Home, ListCollapse } from 'lucide-react'

export const navLinks = [
	{ name: 'Home', href: '/', icon: Home },
	{ name: 'About', href: '/about', icon: ListCollapse },
	{ name: 'Blogs', href: '/blogs', icon: FileCode2 },
	{ name: 'Archive', href: '/blogs/archive', icon: FolderArchive },
	{ name: 'Contact', href: '/contact', icon: Contact2 },
]

export const PopCategories = [
	{ name: 'Front end', slug: 'front-end' },
	{ name: 'Back end', slug: 'back-end' },
	{ name: 'Full stack', slug: 'full-stack' },
	{ name: 'AI', slug: 'ai' },
]
