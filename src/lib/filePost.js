const FilePost = async request => {
  const data = await request.json()
  const { title, name, contents } = data
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  }
  if (title == '' || title == null) {
    return new Response('ERROR: NO KEY/TITLE VALUE', { headers, status: 404 })
  }
  if (name == '' || name == null) {
    return new Response('ERROR: NO NAME VALUE', { headers, status: 404 })
  }
  if (contents == '' || contents == null) {
    return new Response('ERROR: NO CONTENTS VALUE', { headers, status: 404 })
  }
  await FILES.put(title, JSON.stringify(data))
  return new Response('SUCCESS', { headers, status: 200 })
}

export default FilePost
