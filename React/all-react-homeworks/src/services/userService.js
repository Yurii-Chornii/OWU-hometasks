export default class UserService{
    getUsers(){
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => value)
    }
}
