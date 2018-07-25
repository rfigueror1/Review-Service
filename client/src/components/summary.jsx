import React from 'react';

const Summary = (props) => {
  return (
    <div>
      <h2>{props.total} Reviews</h2>
      <p>{props.avg} average</p>
    </div>
  )
}

module.exports = Summary;