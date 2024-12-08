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
	metadataBase: new URL('https://sam-b2x-jma3.vercel.app/'),
	title: 'Dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	authors: [{ name: 'Doniyor Nasriddinov', url: 'https://sam-b2x-jma3.vercel.app/' }],
	icons: { icon: '../public/forMetadata.jpg' },
	keywords:
		"dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, bepul dasturlash, rezyume yozish, portfolio, sammi javascript, sammi raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://sam-b2x-jma3.vercel.app/',
		locale: 'en_EN',
		images: '../public/forMetadata.jpg',
		countryName: 'Uzbekistan',
		siteName: 'samB2x',
		emails: 'nasridoni1@gmail.com',
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
