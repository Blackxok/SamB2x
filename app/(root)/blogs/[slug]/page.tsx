import { getReadingTime } from '@/lib/utils'
import { getBlogBySlug } from '@/service/blog.service'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import { ArrowUpRight, CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ShareBtns from '../../_components/shared-btns'

type Params = Promise<{ slug: string }>

export default async function SlugPage(props: { params: Params }) {
	const params = await props.params
	const blog = await getBlogBySlug(params.slug)

	return (
		<div className='pt-[15vh] max-w-6xl mx-auto mb-7'>
			<h1 className='lg:text-6xl md:text-5xl text-4xl font-jetB'>{blog?.title}</h1>

			<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
				<div className='flex items-center gap-2'>
					<Image src={blog!.author.avatar.url} alt='author' width={30} height={30} className='object-cover rounded-sm' />
					<p>{blog!.author.name}</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>{getReadingTime(blog!.contentHtml?.html)} Read</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>{format(new Date(blog!.createdAt), 'MMM dd yyyy')}</p>
				</div>
			</div>

			<Image src={blog!.image.url} alt='alt' width={`1120`} height={`595`} className='mt-4 rounded-md' />

			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase'>Share</p>
						<ShareBtns />
					</div>
				</div>
				<div className='flex-1 prose dark:prose-invert'>{parse(blog!.contentHtml.html)}</div>
			</div>

			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image src={blog!.author.avatar.url} alt='author' width='155' height='155' className='rounded-md max-md:self-start' />
				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-3xl font-jetB'>Thomas Macaulay</h2>
					<p className='line-clamp-2 text-muted-foreground font-jetB'>{blog!.description}</p>
					<Link href={`/author/${blog?.author.id}`} className='flex items-center gap-2 hover:text-blue-500 underline transition-colors font-jetB'>
						<span>{blog!.author.bio}</span>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	)
}
