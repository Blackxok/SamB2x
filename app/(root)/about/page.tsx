import AuthorCard from '@/components/cards/author'
import { getAuthors } from '@/service/auth.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
			<h1 className='text-center text-2xl font-roboto'>Driven by Technology, Defined by Excellence</h1>

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
				At IT Insights, we believe technology has the power to transform lives. Our mission is to bridge the gap between complex innovations and
				everyday applications, empowering individuals and businesses to thrive in a digital world. From beginners to experts, we aim to inspire,
				educate, and innovate with every article, tutorial, and insight we share.
			</p>

			<h2 className='text-center text-4xl section-title font-creteRound my-12'>
				<span className='font-roboto'>Our writers</span>
			</h2>

			<div className='flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
				{authors!.map(c => (
					<AuthorCard key={c.name} {...c} />
				))}
			</div>
		</div>
	)
}
