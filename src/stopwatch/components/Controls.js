import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Controls.css';

class Controls extends Component {

  static proptTypes = {
      isRunning  : PropTypes.bool,
      start      : PropTypes.func.isRequired,
      stop       : PropTypes.func.isRequired,
      reset      : PropTypes.func.isRequired,
      addLapTime : PropTypes.func.isRequired 
  };

  static defaultProps = {
    isRunning : false
  };

  render() {
    const { isRunning, start, stop, reset, addLapTime } = this.props;

    return (
      <div className="Controls">
        { isRunning ? 
            <button onClick={ stop } className="Controls__button" > STOP </button> :
            <button onClick={ start } className="Controls__button"> START </button>
        }

        { isRunning ? 
            <button onClick={ addLapTime } className="Controls__button" > LAP </button> :
            <button onClick={ reset } className="Controls__button" > RESET </button>
        }

      </div>
    );
  }
}

export default Controls;