import Image from 'next/image'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/components/ListLayout'


export const POSTS_PER_PAGE = 5


export default async function Home() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
    />
  )
}
