const normalizeId = (id: string | undefined) => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.substring(0, 8)}-${id.substring(8, 4)}-${id.substring(12, 4)}-${id.substring(
    16,
    4
  )}-${id.substring(20)}`
}

export const NOTION_TOKEN = process.env.NOTION_TOKEN
export const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID)
export const API_ENDPOINT = 'https://www.notion.so/api/v3'


export async function getNotionUsers(ids: string[]) {
  const { results = [] } = await rpc('getRecordValues', {
    requests: ids.map((id: string) => ({
      id,
      table: 'notion_user',
    })),
  })

  const users: any = {}

  for (const result of results) {
    const { value } = result || { value: {} }
    const { given_name, family_name } = value
    let full_name = given_name || ''

    if (family_name) {
      full_name = `${full_name} ${family_name}`
    }
    users[value.id] = { full_name }
  }

  return { users }
}