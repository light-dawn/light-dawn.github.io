const formatDate = (date: any) => {
  const now = new Date(date).toLocaleDateString("zh-CN")
  return now
}

export default formatDate