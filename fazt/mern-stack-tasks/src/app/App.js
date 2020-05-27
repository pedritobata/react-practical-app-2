import React, { Component } from 'react';

class App extends Component{


    constructor(props){
        super();
        this.state = {
            title: '',
            description: '',
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount(){
        this.fetchTasks();
    }

    fetchTasks(){
        fetch("/api/tasks")
        .then(res => res.json())
        .then(data => {
            this.setState({tasks: data.tasks});
            console.log(data);
        }).
        catch(err => console.log(err))
    }


    addTask(e){
        fetch("/api/tasks", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(result => result.json())
        .then(data => {
            M.toast({html: "Task created"});
            this.setState({title: '', description: ''});
            this.fetchTasks();
        })
        .catch(err => console.log(err));
        e.preventDefault();
    }

    handleChange(e){
        const { name, value } = e.target;
        //console.log(value);
        this.setState({
            [name]: value
        })
    }

    deleteTask(id){
        if(confirm("Seguro desea eliminar la tarea?")){
            fetch("/api/tasks/" + id, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: "Task deleted"});
                this.fetchTasks();
            })
        }
    }


    render(){
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a href="/" className="brand-logo">MERN Stack</a>
                    </div>
                </nav>
                <div className="container">
                  <div className="row">
                    <div className="col s5">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={this.addTask}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input value={this.state.title} 
                                            onChange={this.handleChange} name="title" type="text" 
                                            placeholder="Task Title"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea value={this.state.description} 
                                            onChange={this.handleChange} name="description" 
                                            className="materialize-textarea" 
                                            placeholder="Task Description"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn light-blue darken-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s7">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(task => {
                                        return (
                                            <tr key={task._id}>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td><button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4"><i className="material-icons">delete</i></button></td>
                                                <td><button className="btn light-blue darken-4"><i className="material-icons">edit</i></button></td>
                                            </tr>
                                        );
                                    }) 
                                }
                            </tbody>
                        </table>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default App;