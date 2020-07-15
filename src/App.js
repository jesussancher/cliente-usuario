import React from "react";
import Form from "./components/form"
import Table from "./components/table"
import "./css/styles.css"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    //Obtener los posts
    fetch("https://academlo-api-users.herokuapp.com/users")
      .then(response => response.json())
      .then(results => this.setState({ users: results.data }))
      .catch(error => console.log(error));
  }

  refresh(){
    window.location.reload(false)
  }

  addPost = event => {
    event.preventDefault();
    //Agregar un post
    fetch("https://academlo-api-users.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(results => console.log(results.data))
      .catch(error => console.log(error));
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  
  render() {
 
    return (
      <div className="list-container">
        <Form onInput={this.handleInput} onSubmit={this.addPost}/>
        <br></br>
        <br></br>
        <Table usuarios={this.state.users}/>
      </div>
    );
  }
}

export default App;