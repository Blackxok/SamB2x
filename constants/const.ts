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

export const posts = [
	{
		title: 'Web Developer',
		description: 'This is the first blog post description.',
		author: 'Author 1',
		tags: ['tag1', 'tag2'],
		date: 'Dec 03, 2014',
		image: '/blogs/b1.jpg',
	},
	{
		title: 'Artificial Intelligent',
		description: 'An engaging description for the second blog post.',
		author: 'Author 2',
		tags: ['tag3', 'tag4'],
		date: 'Jan 15, 2015',
		image: '/blogs/b2.jpg',
	},
	{
		title: 'Software Engineering',
		description: 'Details about the third blog post go here.',
		author: 'Author 3',
		tags: ['tag5', 'tag6'],
		date: 'Feb 10, 2016',
		image: '/blogs/b3.jpg',
	},
]

export const content =
	'<p></p><table><tbody><tr><td><h5><em><strong>Segment</strong></em></h5></td><td><h5><strong>Long-fruited</strong></h5></td></tr><tr><td><h5><em><strong>Purpose</strong></em></h5></td><td><h5><strong>For fresh consumption and processing</strong></h5></td></tr><tr><td><h5><em><strong>Precocity</strong></em></h5></td><td><h5><strong>Early ripening, 60-63 days after planting seedlings</strong></h5></td></tr><tr><td><h5><em><strong>Plant</strong></em></h5></td><td><h5><strong>Vigorous, open</strong></h5></td></tr><tr><td><h5><em><strong>Fruit</strong></em></h5></td><td><h5><strong>Elongated teardrop-shaped, with dense pulp</strong></h5></td></tr><tr><td><h5><em><strong>Color</strong></em></h5></td><td><h5><strong>Dark purple to black</strong></h5></td></tr><tr><td><h5><em><strong>Weight</strong></em></h5></td><td><h5><strong>200-250 g</strong></h5></td></tr><tr><td><h5><em><strong>Taste</strong></em></h5></td><td><h5><strong>Good</strong></h5></td></tr></tbody></table><p></p><blockquote><strong>ADVANTAGES</strong></blockquote><ul><li><div><strong>Early ripeness</strong></div></li><li><div><strong>Very high yield potential</strong></div></li><li><div><strong>Attractive fruits</strong></div></li><li><div><strong>Great for slicing</strong></div></li></ul><blockquote><strong>RECOMMENDATIONS FOR GROWING</strong></blockquote><ul><li><div><strong>Designed for cultivation in open ground,</strong></div><div><strong>as well as in plastic greenhouses</strong></div></li></ul><p></p>'
