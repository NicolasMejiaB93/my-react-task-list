import { Task } from "./Task"

export const TaskList = (props)=>{
    const { List } = props;

    return (
    <ul>
       {List.map((Tasks) => (
        <Task name={Tasks.name} />
        ))}     
    </ul>
    )
}