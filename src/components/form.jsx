import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    addUser = event => {
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
        .then(results => {this.props.obtenerUsuariosFn();
        console.log(results)}
        )
          .catch(error => console.log(error));
      };
    
      
      handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
      };

    render(){
        return(
          <form onInput={this.handleInput} onSubmit={this.addUser} method="POST">
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
          <input className="btn" type="submit" value="Registrar" />
        </form>
        );
        
    }
}

export default Form