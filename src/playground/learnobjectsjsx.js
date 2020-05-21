var app={
    title:'sushma eshwar',
    subtitle:'student',
    options:[]
    
};
function op(options){
    if (options.length>0){
        return options;
    }
    else{
        return 'no options'
    }
}
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {op(app.options)}
        <ol>
            <li>1</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
        </ol>
    </div>
);