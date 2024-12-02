import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getReadingTime(content: string) {
	const words = content.split(' ').filter(Boolean)
	const readingTime = Math.ceil(words.length / 250)

	return readingTime === 1 ? '1 min.' : `${readingTime} min.`
}
