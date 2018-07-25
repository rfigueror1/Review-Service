import React from 'react';
import Summary from './summary.jsx';
// import Breakdown from './breakdown,jsx';

const Overview = (props) => {

  return (
    <div>
      <Summary total={props.ratings.total} avg={props.ratings.avg} />
    </div>
  ) 
}

module.exports = Overview;