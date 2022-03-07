import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Vehiculos extends Component {

    constructor(props) {
        super(props);
        this.state = { vehics: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Vehiculos')
            .then(response => response.json())
            .then(data => {
                this.setState({ vehics: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { vehics } = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Piloto</th>
                            <th>Capacidad en Metros</th>
                            <th>Consumo de combustible</th>
                            <th>Tipo de carga</th>
                            <th>Depreciacion</th>
                            <th>Disponible</th>
                            <th>Fecha Diponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehics.map(vehi =>
                            <tr key={vehi.idVehiculo}>
                                <td>{vehi.idPiloto}</td>
                                <td>{vehi.capacidadMetrosCubicos}</td>
                                <td>{vehi.consumoCombustibleKm}</td>
                                <td>{vehi.tipoCarga}</td>
                                <td>{vehi.costosDepreciacionQuetzales}</td>
                                <td>{vehi.disponible}</td>
                                <td>{vehi.fechaDiponible}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}