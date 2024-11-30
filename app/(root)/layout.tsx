import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

export default function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='container'>{children}</div>
			<Footer />
		</main>
	)
}
