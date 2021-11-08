const FileDelete = async request => {
  const { title } = await request.json()
  await FILES.delete(title)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  }
  return new Response('SUCCESS', { headers, status: 200 })
}

export default FileDelete
