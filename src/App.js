import React from "react";
import "./css/styles.css"


class App extends React.Component {
  constructor() {
    super();
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
        <form onInput={this.handleInput} onSubmit={this.addPost}>
          <h3>Datos Personales</h3>
          <input className="input" name="name" type="text" placeholder="Nombre" required />
          <br></br>
          <input className="input" name="lastname" type="text" placeholder="Apellido" required />
          <br></br>
          <br></br>
          <h3>Datos de Usuario</h3>
          <input className="input" name="email" type="email" placeholder="Email" required />
          <br></br>
          <input className="input" name="password" type="password" placeholder="Contraseña" required />
          <br></br>
          <input className="btn" type="submit" value="Registrar"/>
        </form>
        <br></br>
        <br></br>
        <div className="row">
          <table className="table">
          <tr className="tr">
            <th className="th">Nombre</th>
            <th className="th">Apellido</th> 
            <th className="th">Email</th>
            <th className="th">Contraseña</th>
          </tr>
            {this.state.users.map(post => {
                    return (
                      <tr className="tr">
                        <td className="td">{post.name}</td>
                        <td className="td">{post.lastname}</td>
                        <td className="td">{post.email}</td>
                        <td className="td">{post.password}</td>
                      </tr>
                    );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;