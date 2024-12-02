import { getBlogByTag } from '@/service/tag.service'

export default async function TagsSlugPage({ params }: { params: { slug: string } }) {
	const blogs = await getBlogByTag(params.slug)

	return <div className='h-[100vh] flex items-center'>17:8</div>
}
