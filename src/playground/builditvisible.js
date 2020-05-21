/*let visibility=false;


const togglevisibility=()=>{
    visibility=!visibility;
    rendera();
    
};


const rendera=()=>{
    const template=(
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={togglevisibility}>
            {visibility ? 'hide details' : 'show details'}
            </button>
            {visibility && (
                <div>
                    <p>hey, these are some detials nw ou can see</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);  
};
const appRoot=document.getElementById('app');
rendera();*/


class Visible extends React.Component{
    constructor(props){
        super(props);
        this.togglevisibility=this.togglevisibility.bind(this);
        this.state={
            visibility:false
        };
    }
   
    togglevisibility(){
        this.setState((prevstate)=>{
            return{
                visibility: !prevstate.visibility
            };
        });
    }
    render(){
        
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button id="option" onClick={this.togglevisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>here are the hidden details</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
ReactDOM.render(<Visible/>,document.getElementById("app"));