import React, { Component } from 'react';
import './SecondHand.css'
import getAngle from '../utils/angles';

function secondHandPosition(time) {
    return {
        transform: `translate(148px, 40px) rotate(${getAngle(time/1000)}rad)`
    }
}

class SecondHand extends Component {
    render() {
        const { time } = this.props;
        return (
            <div className="SecondHand">
                <div className="SecondHand__line"  style={secondHandPosition(time)}></div>
            </div>
            
        );
    }
}
export default SecondHand;