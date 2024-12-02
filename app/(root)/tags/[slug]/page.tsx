import BlogCard from '@/components/cards/blog'
import { getBlogByTag } from '@/service/tag.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

export default async function TagsSlugPage({ params }: { params: { slug: string } }) {
	const tag = await getBlogByTag(params.slug)

	return (
		<div className='max-w-6xl mx-auto min-h-min mb-5'>
			<div className='relative min-h-[26vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl font-jetB mt-2'>
					<span>{tag?.name}</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='font-jetB'>{tag?.name}</p>
				</div>
			</div>
			<div className='grid grid-cols-3 max-md:grid-cols-1 gap-x-4 gap-y-24'>
				{tag?.blog.map(t => (
					<BlogCard key={t.title} {...t} isVertical />
				))}
			</div>
		</div>
	)
}
