import React from 'react';
export default function EditForm (props){
    const {name, lastname, email, password} = props.user;
    return (
        <div>
            <h3>Editar un usuario</h3>
            <form onSubmit={props.updateUser} onInput={props.editInput}>
            <input className="input" name="name" type="text" placeholder="Nombre" value={name}  required/>
            <input className="input" name="lastname" type="text" placeholder="Apellidos" value={lastname} required/>
            <input className="input" name="email" type="email" placeholder="Email" value={email}  required/>
            <input className="input" name="password" type="password" placeholder="Contraseña" value={password} required/>
            <input className="btn" type="submit" value="Actualizar usuario" />
            </form>
        </div>
    )
}