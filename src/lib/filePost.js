import {v4 as uuidv4 } from 'uuid';

const FilePost = async request => {
  let data = await request.json()
  const { title, username, content } = data;
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  }
  if (title == '' || title == null) {
    return new Response('ERROR: NO KEY/TITLE VALUE', { headers, status: 404 })
  }
  if (username == '' || username == null) {
    return new Response('ERROR: NO USERNAME VALUE', { headers, status: 404 })
  }
  if (content == '' || content == null) {
    return new Response('ERROR: NO CONTENT VALUE', { headers, status: 404 })
  }
  data.uuid = uuidv4();
  await FILES.put(data.uuid, JSON.stringify(data))
  return new Response('SUCCESS', { headers, status: 200 })
}

export default FilePost
