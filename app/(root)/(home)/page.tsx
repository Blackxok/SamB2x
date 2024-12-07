import BlogCard from '@/components/cards/blog'
import { getBlogs } from '@/service/blog.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
}
export default async function rooHomPage() {
	const blogs = await getBlogs()

	return (
		<div className='pt-[10vh] max-w-6xl mx-auto mb-7 min-h-[100vh]'>
			<div className='relative min-h-[60vh] flex items-center justify-center'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl text-center max-w-2xl font-jetB'>38</h1>
			</div>
			<h2 className='text-center text-4xl font-jetB'>
				<span>Recent posts</span>
			</h2>
			<div className='flex flex-col space-y-24 mt-24'>
				{blogs!.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}
