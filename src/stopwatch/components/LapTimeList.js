import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import './LapTimeList.css';

import LapTime from './LapTime';

class LapTimeList extends Component {

  static proptTypes = {
    timeList : PropTypes.array
  };

  static defaultProps = {
    timeList : []
  };

  render() {
        const { timeList } = this.props;
    
        return (
          <div className="LapTimeList">
            <div className="LapTimeList__listwrap">
              {
                timeList.length ? 
                <div className="LapTimeList__headers">
                    <span> LAP </span> <span> TIME </span>
                </div> :
                <span></span>
              }
              <ul className="LapTimeList__list" > 
                <CSSTransitionGroup
                transitionName="slideLap"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={5}>
                  {
                    timeList.map( (time, index) => {
                      return (
                        <li key={ index }>
                          <LapTime lap={ index + 1 } time={ time }  />
                        </li>
                      )
                    })
                  }
                </CSSTransitionGroup>
              </ul>
            </div>
          </div>
        );
      }
    }
    
    export default LapTimeList;