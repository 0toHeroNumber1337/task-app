// Should just render tasks AKA shows our tasks
import React from "react";

class Overview extends React.Component {




    render() {



        return (
            <div>
                <ul>
                    {this.props.tasks.map( (task) => {
                        return (<li id={task.id}> {task.text} <button onClick={() => this.props.handleDelete(task.id)} >-</button></li>)
                    })}

                </ul>
            </div>
        )
    }
}





export default Overview;
