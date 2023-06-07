export const Task = (props)=>{
    const { name } = props;
    return (
        <li>
            <article>
                <h4>{name}</h4> <button>Done</button>  
            </article>
        </li>
    );        
};