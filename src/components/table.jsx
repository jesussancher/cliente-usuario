import React from 'react'

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
          <div className="row">
          <table className="table">
          <tr className="tr">
            <th className="th">Nombre</th>
            <th className="th">Apellido</th> 
            <th className="th">Email</th>
            <th className="th">Contraseña</th>
          </tr>
            {this.props.usuarios.map(post => {
                    return (
                      <tr className="tr">
                        <td className="td">{post.name}</td>
                        <td className="td">{post.lastname}</td>
                        <td className="td">{post.email}</td>
                        <td className="td">{post.password}</td>
                      </tr>
                    );
            })}
            {/* <tr className="tr">
            <td className="td">{this.props.nombre}</td>
            <td className="td">{this.props.apellido}</td>
            <td className="td">{this.props.correo}</td>
            <td className="td">{this.props.contrasena}</td>
            </tr> */}
          </table>
        </div>
        );
    }

}

export default Table