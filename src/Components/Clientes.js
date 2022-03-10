import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddClientModal } from './AddClientModal';
import { EditClientModal } from './EditClientModal';

export class Clientes extends Component {

    constructor(props) {
        super(props);
        this.state = { clientes: [], addModalShow: false, editModalShow: false }
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
        const { clientes, clientId, clientName, clientnit, clienttel, clientmail } = this.state;
        let addMdalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
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
                            <th>Options</th>
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
                                <td>
                                    <ButtonToolbar>
                                        <Button className='mr-2' variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                clientId: cls.idCliente, clientName: cls.nombres,
                                                clientnit: cls.nit, clienttel: cls.telefono, clientmail: cls.email
                                            })}>
                                            Editar Cliente
                                        </Button>

                                        <EditClientModal show={this.state.editModalShow} onHide={editModalClose} clientId={clientId} clientName={clientName} clientnit={clientnit} clienttel={clienttel} clientmail={clientmail} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary' onClick={() => this.setState({ addModalShow: true })}>
                        Agregar Cliente
                    </Button>

                    <AddClientModal show={this.state.addModalShow} onHide={addMdalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}