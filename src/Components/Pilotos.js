import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Pilotos extends Component {

    constructor(props) {
        super(props);
        this.state = { pilotos: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Pilotos')
            .then(response => response.json())
            .then(data => {
                this.setState({ pilotos: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { pilotos } = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Licencia Tipo</th>
                            <th>Disponible</th>
                            <th>Viaticos Asignados</th>
                            <th>Gastos Adicionales</th>
                            <th>Fecha Disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pilotos.map(pilot =>
                            <tr key={pilot.idPiloto}>
                                <td>{pilot.idPiloto}</td>
                                <td>{pilot.nombre}</td>
                                <td>{pilot.licenciaTipo}</td>
                                <td>{pilot.disponible ? "Si" : "No"}</td>
                                <td>{pilot.viaticosAsignados}</td>
                                <td>{pilot.gastosAdicionales}</td>
                                <td>{pilot.fechaDisponible}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}