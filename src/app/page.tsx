import React from 'react'
import Hero from '@/components/Hero'
import { client } from '@/sanity/lib/client'
import { blog } from '@/sanity/schemaTypes/blog'

const Page = async () => {
  const query = `*[_type == 'blog'] | order(_updatedAt asc) {
    title,
    paragraph,
    image,
    "slug": slug.current
  }`

  let data: blog[] = []

  try {
    data = await client.fetch(query)
  } catch (error) {
    console.error('Failed to fetch blog data:', error)
  }

  return (
    <div className="w-full px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item: blog) => (
          <Hero data={item} key={item.slug} />
        ))}
      </div>
    </div>
  )
}

export default Page
