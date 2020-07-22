import React from 'react'

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    deleteUser(id){
      // let id = event.target.id
      const url =  "https://academlo-api-users.herokuapp.com/user/"+id
      fetch(url,{
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(results => {this.props.obtenerUsuariosFn();
      console.log(results)}
      )
      .catch(error => console.log(error));
      } 

  
    render(){
        return(
          <div className="card-container">
            {this.props.usuarios.map(usuario => {
               return (
              <div className="card">
                <div className="name">{usuario.name}</div>
                {/* <div className="td">{usuario.lastname}</div> */}
                <div className="td">{usuario.email}</div>
                {/* <div className="td">{usuario.password}</div> */}
                <div className="row">
                    <div className="col-6">
                    <button id={usuario.id} className="btn" onClick={() => this.props.setUser(usuario)}>Editar</button>
                    </div>
                    <div className="col-6">
                    <button id={usuario.id} className="danger" onClick={() => this.deleteUser(usuario.id)}>Eliminar</button>
                    </div>
                </div>
                
              </div>
              );
            }
            )
            }
          </div>
        )}
}

export default Table