'use client'

import { Button } from '@/components/ui/button'
import { Facebook, Link2, Linkedin, Send, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

const SHARE_OPTIONS = [
	{ name: 'Twitter', icon: Twitter },
	{ name: 'Facebook', icon: Facebook },
	{ name: 'LinkedIn', icon: Linkedin },
	{ name: 'Email', icon: Send },
	{ name: 'Copy Link', icon: Link2 },
]

function ShareBtns() {
	const pathname = usePathname()
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

	const onCopy = () => {
		if (!baseUrl) {
			toast.error('Base URL is not configured.')
			return
		}

		const link = `${baseUrl}${pathname}`
		navigator.clipboard.writeText(link).then(() => toast.success('Copied to clipboard'))
	}

	return (
		<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
			{SHARE_OPTIONS.map(({ name, icon: Icon }) => (
				<Button
					key={name}
					size='icon'
					variant='outline'
					onClick={onCopy}
					aria-label={`Share via ${name}`}
					title={`Share via ${name}`}
					className='border-white'
				>
					<Icon className='w-4 h-4' />
				</Button>
			))}
		</div>
	)
}

export default ShareBtns
