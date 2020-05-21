const app={
    title:'Indecision App',
    subtitle:'Put your hands in the life of computer',
    options:[]
    
};
const onformsubmit=(e)=>{
    e.preventDefault();

    const option= e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    rendera();
};
const onclickform=(e)=>{
    if (app.options.length>0){
        app.options.length=0;
    }
    rendera();
};
const onmakede=()=>{
    const randomnum= Math.floor(Math.random() * app.options.length);
    const option=app.options[randomnum];
    alert(option);
};

const rendera=()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length>0?'Here are your options':'No options'}</p>
            <button disabled={app.options.length===0} onClick={onmakede}>What Should I do?</button>
            <button onClick={onclickform}>remove all</button>
            <ol>
            {
                app.options.map((num)=>{
                    return <li key={num}>{num}</li>;
                })
            }
            </ol>
            <form onSubmit={onformsubmit}>
                <input type="text" name="option"></input>
                <button>add options</button>
            </form>
            
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
rendera();

