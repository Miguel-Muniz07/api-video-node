import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

// Rotas da aplicação

server.post('/videos', () => {
    database.create({
        title: 'Video 1',
        description: 'Este é o primeiro vídeo',
        duration: 120
    });

    console.log(database.list());
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