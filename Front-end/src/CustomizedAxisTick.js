import React from 'react';

function CustomizedAxisTick ({ name }) {

  return (
    <text
      fill="#FFFFFF"
    >
      {name}
    </text>
  );
}
export default CustomizedAxisTick

//tick={<CustomizedAxisTick ndata = {name}/>}
