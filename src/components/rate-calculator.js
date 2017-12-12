import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            dayRate: 1,
            hours: 10
        }
    }

    dayRate(rate) {
        this.setState({
            dayRate: rate
        })
    }

    hoursWorked(hours) {
        this.setState({
            hours: hours
        })
    }


    render() {
        const rate = 10;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} onChange={rate => this.dayRate(rate)} />
                <NumberInput id="hours" label="Hours" min={1} max={12} onChange={
                    (hours) => this.hoursWorked(hours)
                    } />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
            </form>
        );
    }
}

