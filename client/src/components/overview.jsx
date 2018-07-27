import React from 'react';
import Summary from './summary.jsx';
import Breakdown from './Breakdown.jsx';

const Overview = (props) => {

  return (
    <div>
      <Summary total={props.ratings.total} avg={props.ratings.avg} />
      <Breakdown ratings={props.ratings}/>
    </div>
  ) 
}

module.exports = Overview;