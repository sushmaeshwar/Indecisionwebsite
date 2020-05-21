/*let count=0;
const addone=()=>{
    count=count+1;
    renderapp();
};

const minusone=()=>{
    count--;
    renderapp();
};
const reset=()=>{
    count=0;
    renderapp();
};





var appRoot=document.getElementById('app');


const renderapp=()=>{
    const templatetwo=(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addone}>+1</button>
            <button onClick={minusone}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templatetwo, appRoot);  
};
renderapp();*/

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleaddone=this.handleaddone.bind(this);
        this.handleminusone=this.handleminusone.bind(this);
        this.handlereset=this.handlereset.bind(this);
        this.state={
            count:0
        };
    }
    componentDidMount(){
        const json = localStorage.getItem('count');
        const count = parseInt(json,10);
        if(!isNaN(count)){
            this.setState(()=>({ count }));
        }
    }
    componentDidUpdate(prevstate){
        if(prevstate.count!==this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    handleaddone(){
        this.setState((prevstate)=>{
            return{
                count:prevstate.count+1
            };
        });
    }
    //you can rename prevstate as whatever you wanted. 
    //setState is used instead of changing the state manually to increment.
    //instead of using render everytime in the object or method, we are using binding all at once
    handleminusone(){
        this.setState((prevstate)=>{
            return{
                count:prevstate.count-1
            };
        });

    }
    handlereset(){
        this.setState(()=>{
            return{
                count:0
            };

        });
        
        //below used is deprecated
        //this.setState({
        //count:0
        //});
        //this.setState({
        //count:this.state.count+1
        //});
    }
    render(){
        return(
            <div> 
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.handleaddone}>+1</button>
                <button onClick={this.handleminusone}>-1</button>
                <button onClick={this.handlereset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById("app"));