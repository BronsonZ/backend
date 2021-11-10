const FileList = async () => {
  const files = await FILES.list()
  let contentsArray = new Array()
  let content
  for (let i = 0; i < files.keys.length; i++) {
    content = await FILES.get(files.keys[i].name, { type: 'json' })

    if (content != null) {
      contentsArray.push(content)
    }
  }

  const body = JSON.stringify(contentsArray)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
  return new Response(body, { headers, status: 200 })
}

export default FileList
