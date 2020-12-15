export default class SearchService{
    url = 'https://jsonplaceholder.typicode.com'
    getElement(element){
        return fetch(`${this.url}${element}s`)
            .then(value => value.json())
            .then(value => value)
    }
}
