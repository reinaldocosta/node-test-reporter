import { createServer } from 'node:http'

const host = 'localhost'
const port = 8080

const server = createServer((req, res) => {
  res.write('hello world')
  res.end()
})

server.listen(port, () => {
  console.log(`Server is running on port :${port}`)
})
