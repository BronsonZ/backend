// deletes the data for a given uuid

const FileDelete = async request => {
  const { uuid } = await request.json()
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  }
  if (uuid == null) {
    return new Response('ERROR: NO UUID GIVEN', { headers, status: 404 })
  }
  await FILES.delete(uuid)
  return new Response('SUCCESS', { headers, status: 200 })
}

export default FileDelete
