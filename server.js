// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//     response.write('Hello World!')

//     response.end()
// });

// server.listen(3333);

import { fastify } from 'fastify';

const server = fastify();

// Rotas da aplicação

server.post('/videos', () => {
    return 'Hello World!'
});

server.get('/videos', () => {
    return 'Hello World!'
});

server.put('/videos/:id', () => {
    return 'Hello World!'
});

server.delete('/videos/:id', () => {
    return 'Hello World!'
});
server.listen({
    port: 3333
})