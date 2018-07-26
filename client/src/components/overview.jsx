import React from 'react';
import Summary from './summary.jsx';
import Breakdown from './Breakdown.jsx';
import styles from './overviewStyles.css'

const Overview = (props) => {

  return (
    <div>
      <Summary total={props.ratings.total} avg={props.ratings.avg} />
      <Breakdown ratings={props.ratings}/>
    </div>
  ) 
}

export default CSSModules(Breakdown, styles);
module.exports.Overview = Overview;