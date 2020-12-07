export class UsersService{
    getAllUsers(){
        return fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => value);
    }
    getUserByUd(id){
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(value => value.json()).then(value => value);
    }
}
