export default class PeopleService{
    url = 'https://swapi.dev/api/people/';

    async getPeople(){
        return await fetch(this.url).then(value => value.json()).then(value => value.results)
    }
    async getMan(id){
        return await fetch(`${this.url}${id}`).then(value => value.json())
    }
}
