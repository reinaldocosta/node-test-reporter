import { createServer } from 'node:http'

// const unused = 'It will generate an PR annotation'
const host = 'localhost'
const port = 8080

const server = createServer((req, res) => {
  res.write('hello world')
  res.end()
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
