import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notch.css';

import getAngle from '../utils/angles';

function positionNotch(second, radius, elemWidth) {
    let angle = getAngle(second);
    return {
        // y = R - R(sin(pi/2 - theta))
        // x = R + R(cos(pi/2 - theta))
        height: second % 5 === 0 ? 15 : 10,
        width: second % 5 === 0 ? 2 : 1,
        transform: `translate(${150 - elemWidth /2 + radius*(Math.cos(Math.PI/2 - angle))}px, 
                    ${150 - radius*(Math.sin(Math.PI/2 - angle))}px) 
                    rotate(${angle}rad)`
    }
}

function NotchNumber(second) {
    if (second % 5 === 0) {
        return <div className="Notch__number" style={positionNotch(second, 130, 20)}>{second}</div>
    }
}

class Notch extends Component {

  static proptTypes = {
    second : PropTypes.number.isRequired
  };

  render() {
    const { second } = this.props;
    return (
      <div className="Notch">
          <div className="Notch__line" style={positionNotch(second, 150, 2)}></div>
          { NotchNumber(second) }
      </div>
    );
  }
}

export default Notch;