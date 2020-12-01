import React, {Component} from 'react';
import './CarComponent.css'

class CarComponent extends Component {
    render() {
        let {car, driver} = this.props;

        return (
            <div className={'card'}>
                <h4>{car.model}</h4>
                <p>Color - {car.color}, Year - {car.madeYear}, {car.power} hp</p>
                <p><b>Driver:</b></p>
                <p>{driver.name}, {driver.age} y.o. , {driver.experience} years of experience</p>
            </div>
        );
    }
}

export default CarComponent;
