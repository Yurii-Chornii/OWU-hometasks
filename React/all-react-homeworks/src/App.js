import React, {Component} from 'react';
import './App.css';
import Mans from "./components/Mans/Mans";
import Womans from "./components/Womans/Womans";
import MarriedCouples from "./components/MarriedCouples/MarriedCouples";

class App extends Component {
    state = {mans : [], womans : []}
    getMans = (mans) => {
        this.setState({mans : mans})
    }
    getWomans = (womans) => {
        this.setState({womans : womans})
    }
    render() {
        let {mans, womans} = this.state
        return (
            <div className={'wrapper'}>
                <div className={'section'}>
                    <Mans getMans={this.getMans}/>
                </div>
                <div className={'section'}>
                    <Womans getWomans={this.getWomans}/>
                </div>
                <div className={'section'}>
                    <MarriedCouples mans={mans} womans={womans}/>
                </div>
            </div>
        );
    }
}

export default App;
