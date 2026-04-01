import { randomUUID } from "node:crypto";

class DatabaseMemory{
    #videos = new Map();

    async list(){
        return this.#videos.values();
    }

    async create(video){
        const videoId = crypto.randomUUID();

        this.#videos.set(videoId, video);
    }

    async update(id, video){
        this.#videos.set(id, video);
    }

    async delete(id){
        this.#videos.delete(id);
    }
}