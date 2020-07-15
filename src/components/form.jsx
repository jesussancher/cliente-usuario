import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
          <form onInput={this.props.onInput} onSubmit={this.props.onSubmit} method="POST">
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
        );
        
    }
}

export default Form