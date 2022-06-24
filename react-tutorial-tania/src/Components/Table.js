import React, { Component } from "react";

// Componentes simples: são arrow functions como abaixo

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Trabalho</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )

    })
      
     return <tbody>{rows}</tbody>            
}

const Table = (props) => {
    const {characterData,removeCharacter} = props
        return (
            <table>
               <TableHeader/>
               <TableBody characterData={characterData} removeCharacter = {removeCharacter}/>
                
            </table>
        )
    
}

export default Table