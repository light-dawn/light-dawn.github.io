import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/components/ListLayout'


export default async function Home() {
  // console.log("Language: ", lang)
  const POSTS_PER_PAGE = 5
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
