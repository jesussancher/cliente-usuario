import React from "react";
import Form from "./components/form"
import Table from "./components/table"
import EditForm from "./components/edit-form"
import "./css/styles.css"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userEdited: {name : "", lastname : "", email : "", password : ""}
    };
  }
  
  fetchprueba = () => {
    fetch("https://academlo-api-users.herokuapp.com/users")
      .then(response => response.json())
      .then(results => this.setState({ usuarios: results.data }))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    //Obtener los posts
    this.obtenerUsuarios()
  }

  obtenerUsuarios = () => {
    fetch("https://academlo-api-users.herokuapp.com/users")
      .then(response => response.json())
      .then(results => this.setState({ users: results.data }))
      .catch(error => console.log(error));
  }

  updateUser = (event) => {
    const url = 
    event.preventDefault()
    fetch("https://academlo-api-users.herokuapp.com/user/"+ this.state.userEdited.id,{
    method:  "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      name: this.state.userEdited.name,
      lastname: this.state.userEdited.lastname,
      email: this.state.userEdited.email,
      password: this.state.userEdited.password
    })
  })
  .then(response => response.json())
  .then(results => {this.obtenerUsuarios();
  console.log(results)}
  )
  .catch(error => console.log(error));
  }

  editInput = (event) =>{
    this.setState({userEdited: {...this.state.userEdited, [event.target.name]: event.target.value}})
  }

  setUser =(user) => {
    this.setState({userEdited : user})
    console.log(user)
  }

  render() {
 
    return (
      <div className="row list-container">
        <div className="col-3">
        <Form 
        obtenerUsuariosFn={this.obtenerUsuarios}
        />
        </div>
        <div className="col-6">
        <Table usuarios={this.state.users} setUser={this.setUser} obtenerUsuariosFn={this.obtenerUsuarios}/>
        </div>
        <div className="col-3">
        <EditForm user={this.state.userEdited} editInput={this.editInput} updateUser={this.updateUser}/>
        </div>
      </div>
    );
  }
}

export default App;