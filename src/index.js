import { Router } from 'itty-router'
import FileDelete from './lib/fileDelete'
import FileList from './lib/fileList'
import FilePost from './lib/filePost'
import NotFound from './lib/notFound'

// Handles all requests

const router = Router()

router.get('/post', () => FileList())
router.post('/post', async request => FilePost(request))
router.delete('/post', async request => FileDelete(request))
router.all('*', () => NotFound())

addEventListener('fetch', event => {
  event.respondWith(router.handle(event.request))
})
