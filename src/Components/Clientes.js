import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Clientes extends Component {

    constructor(props) {
        super(props);
        this.state = { clientes: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Clientes')
            .then(response => response.json())
            .then(data => {
                this.setState({ clientes: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { clientes } = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombres</th>
                            <th>NIT</th>
                            <th>Telefono</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cls =>
                            <tr key={cls.idCliente}>
                                <td>{cls.idCliente}</td>
                                <td>{cls.nombres}</td>
                                <td>{cls.nit}</td>
                                <td>{cls.telefono}</td>
                                <td>{cls.email}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}