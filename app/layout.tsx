import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { JetBrains_Mono, Roboto } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const jetB = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
})
const roboto = Roboto({
	weight: '500',
	subsets: ['latin'],
	variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://test-blog.sammi.ac'),
	title: 'Sammi dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	authors: [{ name: 'Samar Badriddinov', url: 'https://sammi.ac' }],
	icons: { icon: '/favicon.png' },
	keywords:
		"samar badriddinov, sammi, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, sammi, sammi academy, bepul dasturlash, rezyume yozish, portfolio, sammi javascript, sammi raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Sammi dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://test-blog.sammi.ac',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'Uzbekistan',
		siteName: 'Sammi',
		emails: 'info@sammi.ac',
	},
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en'>
			<body className={`${roboto.variable} ${jetB.variable} antialiased dark`}>
				<NextTopLoader showSpinner={false} />
				{children}
			</body>
		</html>
	)
}
