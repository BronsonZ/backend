const FileDelete = async request => {
  const { uuid } = await request.json()
  await FILES.delete(uuid)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  }
  return new Response('SUCCESS', { headers, status: 200 })
}

export default FileDelete
