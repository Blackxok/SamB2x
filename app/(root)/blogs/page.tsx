import BlogCard from '@/components/cards/blog'
import { posts } from '@/constants/const'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

export default function BlogsPage() {
	return (
		<div className='max-w-6xl mx-auto mb-7'>
			<div className='relative min-h-[26vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl font-jetB'>
					<span className='font-jetB'>Blogs</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100 font-jetB'>
						Home
					</Link>
					<Dot />
					<p className='font-jetB'>Blogs</p>
				</div>
			</div>
			<h1 className='text-center text-2xl font-jetB mt-7'>Lorem ipsum dolor sit amet.</h1>

			<div className='grid grid-cols-3 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-6'>
				{posts.map(post => (
					<BlogCard key={post.title} {...post} isVertical />
				))}
			</div>
		</div>
	)
}