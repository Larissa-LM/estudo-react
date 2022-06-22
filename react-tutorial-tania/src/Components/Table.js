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

const TableBody = () => {
    return (
        <tbody>
                    <tr>
                        <td>João</td>
                        <td>Barbeiro</td>
                    </tr>
                    <tr>
                        <td>Luis</td>
                        <td>Designer</td>
                    </tr>
                    <tr>
                        <td>Lis</td>
                        <td>Cantora</td>
                    </tr>
                </tbody>
    )
}

class Table extends Component {
    render(){
        return (
            <table>
               <TableHeader/>
               <TableBody/>
                
            </table>
        )
    }
}

export default Table