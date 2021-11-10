//404 Not Found response

const NotFound = () => {
  return new Response('404 Not Found', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain',
    },
    status: 404,
  })
}
export default NotFound
