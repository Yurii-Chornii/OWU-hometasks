export class PostService{
    url = 'https://jsonplaceholder.typicode.com/posts';

    async getAllPosts(){
        return await fetch(this.url)
            .then(value => value.json());
    }
    async getPost(id){
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json());
    }
}
