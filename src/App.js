import React from 'react';
import uniqid from "uniqid"
import './App.css';
import Overview from './Components/Overview';


class App extends React.Component {



  constructor(props) {
    super(props)

    this.state = {
      task: { text: '' },
      tasks: [],
      id: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitTask = this.submitTask.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // Will handle new values added
  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: e.target.value
      }
    })
  }

handleDelete(id){
  const delTodo =  this.state.tasks.filter((test) => test.id !== id)
  this.setState({
   tasks: delTodo

  
  })
}

  // When button or form is submited will add new task to Tasks and set task to an empty string
  submitTask(e) {

    e.preventDefault();
    
    this.setState((prevState, props) => ({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
      id: 0
    })
    );
  }




  render() {




    return (
      <div className="App">
        <h1>Hi world</h1>

        <form onSubmit={this.submitTask}>
          <label htmlFor='newTask'>Enter A Task</label>
          <input onChange={this.handleChange} type='text' id='newTask' value={this.state.task.text} />

          <button type="submit">
            Add Task
          </button>
        </form>

        <Overview tasks={this.state.tasks} liId = {this.state.id} handleDelete = {this.handleDelete}/>

      </div>





    );
  }
}

export default App;

