import BlogCard from '@/components/cards/blog'
import { getBlogs } from '@/service/blog.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
}

export default async function HomePage() {
	const blogs = await getBlogs()

	return (
		<div className='pt-[10vh] max-w-6xl mx-auto mb-7 min-h-[100vh] px-4 sm:px-6 lg:px-8'>
			{/* Hero Section */}
			<div className='relative min-h-[30vh] flex items-center justify-center text-center px-4'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jetB max-w-4xl leading-snug'>Discover the Future of Technology</h1>
			</div>

			{/* Recent Posts Section */}
			<h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-roboto mb-12'>
				<span>Recent Posts</span>
			</h2>

			{/* Blog Cards */}
			<div className='flex flex-col space-y-16 sm:space-y-20 md:space-y-24'>
				{blogs?.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}
