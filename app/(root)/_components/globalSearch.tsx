import { Badge } from '@/components/ui/badge'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { PopCategories } from '@/constants/const'
import { Search } from 'lucide-react'

export default function GlobalSearch() {
	return (
		<Drawer>
			<DrawerTrigger>
				<div className='hover:bg-blue-400/20 font-jetB cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-1'>
					<Search className='w-5 h-5' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerTitle className='hidden'>Accessible Drawer Title</DrawerTitle>
				<div className='container max-w-6xl mx-auto py-10 '>
					<Input className='border-b border-gray-100' placeholder='Search..' />
					<div className='flex flex-col space-y-2 mt-4'>
						<p className='font-jetB'>Post by categories</p>
						<div className='flex flex-wrap gap-2'>
							{PopCategories.map(e => (
								<Badge key={e.slug}>{e.name}</Badge>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
