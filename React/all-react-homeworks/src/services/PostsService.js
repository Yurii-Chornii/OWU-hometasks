export class PostsService {
    getAllPosts(){
        return fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => value)
    }
    getPostByUd(id){
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(value => value.json()).then(value => value)
    }
}
