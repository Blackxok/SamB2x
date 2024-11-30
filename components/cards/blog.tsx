import { cn } from '@/lib/utils'
import { IBlog } from '@/types'
import { CalendarDays, Clock, Dot, Minus, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface Props extends IBlog {
	isVertical?: boolean
}
export default function BlogCard(blog: Props) {
	return (
		<Link href={'/'} className={cn('grid group gap-4', blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}>
			<div className='relative w-full h-64'>
				<Image
					width={350}
					height={250}
					src={blog.image}
					alt={blog.title}
					//
					className='rounded-md transition-all object-cover w-full h-full'
				/>
			</div>
			<div className='flex flex-col justify-center space-y-4 border p-4 rounded-md'>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<CalendarDays className='w-5 h-5' />
						<p className='font-jetB'>{blog.date}</p>
					</div>
					<Minus />
					<div className='flex items-center gap-2'>
						<Clock className='w-5 h-5' />
						<p className='font-jetB'>01 min read</p>
					</div>
				</div>
				<h2 className={cn('text-3xl font-bold font-roboto', blog.isVertical && 'text-2xl')}>{blog.title}</h2>
				<p className='text-md font-jetB '>{blog.description}</p>

				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<User2 />
						<p className='font-jetB truncate'>by {blog.author}</p>
					</div>
					<Dot />
					<div className='flex items-center gap-2'>
						<Badge className='font-jetB truncate'>{blog.title}</Badge>
					</div>
				</div>
			</div>
		</Link>
	)
}
