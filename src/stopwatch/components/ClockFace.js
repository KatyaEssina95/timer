import React, { Component } from 'react';
import './ClockFace.css';
import Notch from './Notch';
import SecondHand from './SecondHand';

function renderNotches() {
  var notches = [];
  for (let i=1; i<=60; i++) {
    notches.push(<Notch key={i} second={i}/>)
  }
  return notches
};

class ClockFace extends Component {

  render() {
    const { time } = this.props;
    const notches = renderNotches();
    return (
      <div className="ClockFace">
        <SecondHand time={time}></SecondHand>
        { notches }
      </div>
    );
  }
}

export default ClockFace;