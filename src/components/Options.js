import React from 'react';
import Option from './Option';
//we have to import react because all of our jsx are converted to createElement calls to render as javascript
const Options =(props)=>(
    <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                className="button button--link"
                onClick={props.handledeleteoptions}
                >
                Remove All
                </button>
            </div>
            
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
            {
                props.options.map((num,index) => 
                <Option 
                    key={num} 
                    optionText={num}
                    count={index+1}
                    handledeleteoption={props.handledeleteoption}
                />)
                
            }
            
            
        </div>
);
export default Options;