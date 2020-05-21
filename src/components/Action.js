import React from 'react';

const Action = (props) =>(
<div>
    <button className="big-button"
    onClick={props.handlepick}
    disabled={!props.hasoptions}
    >
    What should I do?
    </button>
</div> 
);
export default Action;