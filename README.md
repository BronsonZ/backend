# `Worker API Backend for Cloudflare internship general assignment`

This is my submission for the backend API section of the Cloudflare internship [`general assignment`](https://apply.cloudflareworkers.com/).

Deployed version can be found [`here`](https://worker.bronsonz.workers.dev/) all requests must be sent to "/posts"

Deployed frontend can be found [`here`](https://frontend-bx9.pages.dev/)

## Intro

This worker is written in JavaScript and uses the Cloudflare worker KV as the database.

This backend currently supports, GET, POST, and DELETE requests

The only dependencies are `itty-router` for routing the requests and `uuid` for generating the unique key values.

Each POST request must contain a `title`, `username`, and `content` value.

## Requirements Filled
* `API Endpoint 1: GET/posts` | responds with a JSON containing a list of all the posts
* `API Endpoint 2: POST/posts` | takes a JSON input and adds it to the KV storage
* `API Endpoint 3: DELETE/posts` | takes a uuid input and removes the corresponding key value pair from the KV database

## Author
Bronson Zell

bzell007@gmail.com