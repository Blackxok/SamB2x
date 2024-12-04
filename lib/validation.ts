'use client'

import { z } from 'zod'

export const contactSchema = z.object({
	message: z.string().min(10),
	name: z.string().min(3),
	email: z.string().email(),
})
