import { cn, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface Props extends IBlog {
	isVertical?: boolean
}
export default function BlogCard(blog: Props) {
	return (
		<div className={cn('group grid gap-4', blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}>
			<Link href={`/blogs/${blog.slug}`}>
				<div className='relative w-full h-64 md:h-72'>
					<Image width={350} height={250} src={blog.image.url} alt={blog.title} className='rounded-md transition-all object-cover w-full h-full' />
				</div>
			</Link>

			<div className='flex flex-col justify-between border p-4 rounded-md min-h-64'>
				<Link href={`/blogs/${blog.slug}`}>
					<div className='flex items-center gap-4 text-sm text-gray-500'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p className='font-jetB'>{format(new Date(blog.createdAt), 'MMM dd yyyy')}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p className='font-jetB'>{getReadingTime(blog.contentHtml.html)}</p>
						</div>
					</div>

					<h2 className={cn('text-3xl font-bold font-roboto my-2 line-clamp-1', blog.isVertical && 'text-2xl')}>{blog.title}</h2>

					<p className='text-md font-jetB line-clamp-5'>{blog.description}</p>
				</Link>

				<div className='flex flex-wrap items-center gap-4 text-sm text-gray-500'>
					<div className='flex items-center gap-2'>
						<Image src={blog.author.avatar.url} width={35} height={35} alt='Avatar' className='rounded-full' />
						<p className='font-jetB truncate'>{blog.author.name}</p>
					</div>
					<div className='flex items-center gap-2'>
						<Link href={`/tags/${blog.tag.slug}`}>
							<Badge className='font-jetB truncate'>{blog.category.slug}</Badge>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
