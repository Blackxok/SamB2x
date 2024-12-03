import { IAuthor } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthorCard(author: IAuthor) {
	return (
		<Link href={`/author/${author.id}`}>
			<div className='flex flex-col space-y-2 w-52 text-center'>
				<div className='w-full h-52 relative'>
					<Image src={author.avatar.url} fill alt={author.name} className='object-cover rounded-md ' />
				</div>
				<h2 className='text-2xl font-jetB'>{author.name}</h2>
				<p className='text-muted-foreground'>
					<span className='font-bold text-white'>{author.blogs.length}</span> Published posts
				</p>
			</div>
		</Link>
	)
}
