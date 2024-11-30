import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

export default function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}
