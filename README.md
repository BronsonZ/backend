# `Worker API Backend for Cloudflare internship general assignment`

This is my submission for the backend API section of the Cloudflare internship [`general assignment`](https://apply.cloudflareworkers.com/).

This worker is written in JavaScript and uses the Cloudflare worker KV as the database.

This backend currently supports, GET, POST, and DELETE requests

The only dependencies are `itty-router` for routing the requests and `uuid` for generating the unique key values.

Each POST request must contain a `title`, `username`, and `content` value.

#### Author
Bronson Zell

bzell007@gmail.com