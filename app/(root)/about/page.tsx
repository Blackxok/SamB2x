import AuthorCard from '@/components/cards/author'
import { getAuthors } from '@/service/auth.service'
import { Dot, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About us',
}
export default async function AboutPage() {
	const authors = await getAuthors()


	return (
		<div className=' min-h-[100vh] pt-[10vh] max-w-6xl mx-auto mb-8'>
			<div className='relative min-h-[20vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl font-roboto'>
					<span className='font-jetB'>About</span>
				</h2>

				<div className='flex items-center gap-1 mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100 font-jetB'>
						Home
					</Link>
					<Dot />
					<p className='font-jetB'>About</p>
				</div>
			</div>
			<h1 className='text-center text-2xl font-jetB'>Lorem ipsum dolor sit amet.</h1>

			<div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
				<div className='col-span-2 max-md:col-span-4 relative h-80'>
					<Image src={'/about/a1.jpg'} alt='about' fill className='rounded-md object-cover' />
				</div>{' '}
				<div className='self-end  max-md:col-span-2 max-md:h-72 relative h-80'>
					<Image src={'/about/a2.jpg'} alt='about' fill className='rounded-md object-cover' />
				</div>{' '}
				<div className='max-md:h-72 max-md:col-span-2 max-md:mb-8 relative h-80'>
					<Image src={'/about/a3.jpg'} alt='about' fill className='rounded-md object-cover' />
				</div>
			</div>
			<p className='my-7 font-jetB'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui ratione, voluptatem itaque corporis rem dolor necessitatibus voluptates
				adipisci ipsum dicta quidem odio officiis ipsa doloremque maxime atque! Perspiciatis, autem?
			</p>

			<h2 className='text-center text-4xl section-title font-creteRound my-12'>
				<span>Our writers</span>
			</h2>

			<div className='flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
				{authors!.map(c => (
					<AuthorCard key={c.name} {...c} />
				))}
			</div>
		</div>
	)
}
