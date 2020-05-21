import React from 'react';
import Addoption from './Addoption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        SelectedOption:undefined
    };
    /*constructor(props){
        super(props);
        this.handledeleteoptions=this.handledeleteoptions.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.handleaddoption=this.handleaddoption.bind(this);
        this.handledeleteoption=this.handledeleteoption.bind(this);
        this.state={
            options:[]
        };
    }*/

    //handledeleteoptions
    handledeleteoptions=()=>{        
        this.setState(()=>({options:[]}));
    }
    handledeleteoption=(optiontoremove)=>{
        this.setState((prevstate)=>({
            options:prevstate.options.filter((option)=>{
                return optiontoremove !== option;
            })
        }));
    }
    //handlepick
    handlepick=()=>{
        const randomnum= Math.floor(Math.random() * this.state.options.length);
        const option=this.state.options[randomnum];
        this.setState(()=>({
            SelectedOption: option
        }));
    }
    handleaddoption=(option)=>{
        if(!option){
            return 'enter valid value to add';
        }else if(this.state.options.indexOf(option)>-1){
            return 'this option already exists';
        }
        this.setState((prevstate)=>({options:prevstate.options.concat(option)}));
    }

    //to close modal
    handlemodal=()=>{
       this.setState(()=>({SelectedOption:undefined}));
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){
                this.setState(()=>({options}));
            }
        }
        catch(e){
            // do nothing at all
        }
        
         // we are using this to display options on the screen
    }
    componentDidUpdate(prevprops,prevstate){
        if(prevstate.options.length !== this.state.options.length){
            console.log('saving data');
            const json= JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('componentwillunmount');

    }
    
    render(){
        const title="Indescision App";
        const subtitle ="Put your life in the hands of a computer";
        
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action hasoptions={this.state.options.length>0}
                        handlepick={this.handlepick}
                    />
                    <div className="widget">
                        <Options options={this.state.options}
                            handledeleteoptions={this.handledeleteoptions}
                            handledeleteoption={this.handledeleteoption}
                        />
                        <Addoption
                            handleaddoption={this.handleaddoption}
                        />
                    </div>
                </div>
                <OptionModal
                    SelectedOption={this.state.SelectedOption}
                    handlemodal={this.handlemodal}
                />
            </div>
        );
    }
}
