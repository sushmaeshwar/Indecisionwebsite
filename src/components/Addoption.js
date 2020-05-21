import React from 'react';

export default class Addoption extends React.Component{
    state= {
        error:undefined
    };
    //constructor(props){
       // super(props);
        //this.handleaddoption=this.handleaddoption.bind(this);
        //this.state={
        //   error:undefined
        //};
    //}
    handleaddoption=(e)=>{
        e.preventDefault();
        const option=e.target.elements.add.value.trim();
        const error= this.props.handleaddoption(option);
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.add.value = ''; //this is to clear the text in the tab after enter
        }
    };
    render(){
        return(
            <div>
                {this.state.error&&<p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleaddoption}>
                    <input className="add-option__input" type="text" name="add"></input>
                    <button className="button">Add option</button>
                </form>
                
            </div>
        );
    }
}
