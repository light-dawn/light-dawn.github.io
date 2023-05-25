import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import getAllFilesRecursively from './utils/files'

const root = process.cwd()


export function formatSlug(slug: any) {
  return slug.replace(/\.(mdx|md)/, '')
}


export function dateSortDesc(a: any, b: any) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}


export async function getAllFilesFrontMatter(folder: string) {
    const prefixPaths = path.join(root, 'src', 'data', folder)
  
    const files = getAllFilesRecursively(prefixPaths)
  
    const allFrontMatter: any = []
  
    files.forEach((file: any) => {
      // Replace is needed to work on Windows
      const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
      // Remove Unexpected File
      if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
        return
      }
      const source = fs.readFileSync(file, 'utf8')
      const { data: frontmatter } = matter(source)
      if (frontmatter.draft !== true) {
        allFrontMatter.push({
          ...frontmatter,
          slug: formatSlug(fileName),
          date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
        })
      }
    })
  
    return allFrontMatter.sort((a: any, b: any) => dateSortDesc(a.date, b.date))
  }