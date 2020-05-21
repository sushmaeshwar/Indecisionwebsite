class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handledeleteoptions=this.handledeleteoptions.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.handleaddoption=this.handleaddoption.bind(this);
        this.handledeleteoption=this.handledeleteoption.bind(this);
        this.state={
            options:[]
        };
    }
    //below are life cycle methods that can be called only on state functions
    //stateless function doesnt have any life cycle methods. so they are fast
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
    //handledeleteoptions
    handledeleteoptions(){        
        this.setState(()=>({options:[]}));
    }
    handledeleteoption(optiontoremove){
        this.setState((prevstate)=>({
            options:prevstate.options.filter((option)=>{
                return optiontoremove !== option;
            })
        }));
    }
    //handlepick
    handlepick(){
        const randomnum= Math.floor(Math.random() * this.state.options.length);
        const option=this.state.options[randomnum];
        alert(option);
    }
    handleaddoption(option){
        if(!option){
            return 'enter valid value to add';
        }else if(this.state.options.indexOf(option)>-1){
            return 'this option already exists';
        }
        this.setState((prevstate)=>({options:prevstate.options.concat(option)}));
    }
    render(){
        const title="Indescision App";
        const subtitle ="Put your life in the hands of a computer";
        
        return(
            <div>
                <Header title={title} subtitle={subtitle}/> 
                <Action hasoptions={this.state.options.length>0}
                    handlepick={this.handlepick}
                />
                <Options options={this.state.options}
                    handledeleteoptions={this.handledeleteoptions}
                    handledeleteoption={this.handledeleteoption}
                />
                <Addoption
                    handleaddoption={this.handleaddoption}
                />
            </div>
        );
    }
}

//title = is the prop here
const Header=(props)=>{ //this is a stateless function implementation
    return(
        
            <div>
                <h1>{props.title}</h1>
                {
                    props.subtitle && <h2>{props.subtitle}</h2>
                }
            </div>
       
    );

};
Header.defaultProps = {
    title: 'some default!'
};

/*class Header extends React.Component{ //component itself is a class. we are extending react component class. we are converting es6 class to react component by extending component.
    //react requires one method to be defined that is render. in es6 no method needs to  be defined.
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}*/
const Action= (props) =>{
    return(
        <div>
        <button 
        onClick={props.handlepick}
        disabled={!props.hasoptions}
        >
        What should I do?
        </button>
    </div> 
    );
};
/*class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                onClick={this.props.handlepick}
                disabled={!this.props.hasoptions}
                >
                What should I do?
                </button>
            </div>
        );
    }
}*/
//option component
/*class Options extends React.Component{
    
    
    render(){
        return(
            <div>
                <button onClick={this.props.handledeleteoptions}>Remove All</button>
                {
                    this.props.options.map((num) => <Option key={num} optionText={num}/>)
                    
                }
                
                
            </div>
        );
    }
}*/
const Options =(props)=>{
    return(
        <div>
                <button onClick={props.handledeleteoptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option to get started</p>}
                {
                    props.options.map((num) => 
                    <Option 
                        key={num} 
                        optionText={num}
                        handledeleteoption={props.handledeleteoption}
                    />)
                    
                }
                
                
            </div>
    );
};
//KEY IS A RESERVED NAME WHICH WILL NOT BE AVAILABLE DOWN BELOW
/*class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}*/
const Option=(props)=>{
    return(
        <div>
                {props.optionText}
                <button 
                onClick = {(e) =>{
                    props.handledeleteoption(props.optionText);
                }}
                
                >
                    remove
                </button>
        </div>
    );
};
//add option component
class Addoption extends React.Component{
    constructor(props){
        super(props);
        this.handleaddoption=this.handleaddoption.bind(this);
        this.state={
            error:undefined
        };
    }
    handleaddoption(e){
        e.preventDefault();
        const option=e.target.elements.add.value.trim();
        const error= this.props.handleaddoption(option);
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.add.value = ''; //this is to clear the text in the tab after enter
        }
    }
    render(){
        return(
            <div>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit={this.handleaddoption}>
                    <input type="text" name="add"></input>
                    <button>Add option</button>
                </form>
                
            </div>
        );
    }
}

//we are using components so not necessary to write everything in jsx


//we can change just rendering classes to stateless components becuase it makes the application faster.
    
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));