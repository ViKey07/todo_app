export const Task = (props) => {
    return (
        <div 
        
        id={props.completed?  "completeButton1": "completeButton"}
       
        
        className="task" >
          <h3 style={{padding:'0px 50px'}}> { props.taskName } </h3>
          <div className="btns">
            <button id="cmplt" onClick={() => props.completeTask(props.id)}> Complete </button>
            <button id="clr" onClick={() => props.clearTask(props.id)}> Clear </button>
            <button id="dlt" onClick={() => props.deleteTask(props.id)}> Delete Task </button>
          </div>

        </div>
    );
}