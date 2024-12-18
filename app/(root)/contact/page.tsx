import ContactForm from '@/components/forms/contact'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Contact page',
}
function ContactPage() {
	return (
		<div className='max-w-6xl mx-auto mb-7 h-[100vh]'>
			<div className='relative min-h-[26vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl font-jetB mt-2'>
					<span>Contact</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='font-jetB'>Contact</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-4xl font-jetB'>Contact Blackxok</h1>
					<p className='mt-2 font-jetB'>
						I am here to help and answer any question you might have.
						<br /> I look forward to hearing from you
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm font-roboto'>nasridoni1@gmail.com</p>
					</div>
					<div className='flex items-center gap-3 mt-2'>
						<Phone className='w-4 h-4' />
						<p className='text-sm font-roboto'>+98 02 296 4902</p>
					</div>
				</div>

				<div>
					<h1 className='text-4xl font-jetB mb-2'>Contact form</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
