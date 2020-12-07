export class CommentsService {
    url = 'https://jsonplaceholder.typicode.com/comments';

    getAllComments() {
        return fetch(this.url).then(value => value.json()).then(value => value)
    }

    getCommentById(id) {
        return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then(value => value.json()).then(value => value);
    }
}
