import { Router } from 'itty-router'
import FileDelete from './lib/fileDelete'
import FileList from './lib/fileList'
import FilePost from './lib/filePost'
import NotFound from './lib/notFound'

// Handles all requests

const router = Router()

router.get('/posts', () => FileList())
router.post('/posts', async request => FilePost(request))
router.delete('/posts', async request => FileDelete(request))
router.all('*', () => NotFound())

addEventListener('fetch', event => {
  event.respondWith(router.handle(event.request))
})
