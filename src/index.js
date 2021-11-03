import Router from './router.js'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


const filePost = async request => {
  const { key, contents } = await request.json()

  if(key == "" || key == null){
    return new Response("ERROR: NO KEY VALUE")
  }
  if(contents == "" || contents == {} || contents == null){
    return new Response("ERROR: CONTENTS EMPTY")
  }
  await FILES.put(key, JSON.stringify(contents))
  return new Response("SUCCESS")
}


const fileList = async () => {
  const files = await FILES.list()

  let contentsArray = new Array();

  let content;

  for (let i = 0; i < files.keys.length; i++) {

    content = await FILES.get(files.keys[i].name, {type: "json"});

    if (content != null) {
      
      contentsArray.push(content);
    }
  }

  const body = JSON.stringify(contentsArray);
  const headers = { 'Content-type': 'application/json' }
  return new Response(body, { headers })
  //return new Response(JSON.stringify(contentsArray));
}


/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  const router = new Router();

  router.post(
    '/post',
    () => filePost(request),
  )
  router.get(
    '/post',
    () => fileList(),
  )
  router.all(
    () =>
      new Response("404 Not Found", {
        headers: { 'content-type': 'text/plain' },
        status: 404,
      }),
  )

  const response = await router.route(request)

  return response
}
