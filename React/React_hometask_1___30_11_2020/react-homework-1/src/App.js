import React, {Component} from 'react';
import CarComponent from "./components/CarComponent/CarComponent";


class App extends Component {
    cars = [
        {
            model: 'BMW X7 M competition',
            madeYear: 2020,
            power: 550,
            color: 'blue',
            driver: {
                name: 'Yurii',
                age: 22,
                gender: 'male',
                experience: 4
            }
        },
        {
            model: 'BMW X5 M competition',
            madeYear: 2019,
            power: 500,
            color: 'white',
            driver: {
                name: 'Alex',
                age: 22,
                gender: 'male',
                experience: 4
            }
        },
        {
            model: 'BMW X3',
            madeYear: 2017,
            power: 250,
            color: 'black',
            driver: {
                name: 'Igor',
                age: 23,
                gender: 'male',
                experience: 3
            }
        },
    ];

    render() {
        return (
            this.cars.map((value, index) => (
                <CarComponent car={value} key={index} driver={value.driver}/>
            ))
        );
    }
}

export default App;
