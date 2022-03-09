import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Viajes extends Component {

    constructor(props) {
        super(props);
        this.state = { viajes: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Viajes')
            .then(response => response.json())
            .then(data => {
                this.setState({ viajes: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { viajes } = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cliente</th>
                            <th>Vehiculo</th>
                            <th>Departamento</th>
                            <th>Dirección de Recepción</th>
                            <th>Dirección de Entrega</th>
                            <th>Documentación Requerida</th>
                            <th>Porcentaje de cargo Aplicado</th>
                            <th>Costo Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viajes.map(viaj =>
                            <tr key={viaj.idViaje}>
                                <td>{viaj.idViaje}</td>
                                <td>{viaj.idCliente}</td>
                                <td>{viaj.idVehiculo}</td>
                                <td>{viaj.idDepartamento}</td>
                                <td>{viaj.direccionRecepcionCarga}</td>
                                <td>{viaj.direccionEntregaCarga}</td>
                                <td>{viaj.documentacionRequerida}</td>
                                <td>{viaj.porcentajeCargoAplicado}</td>
                                <td>{viaj.costoTotal}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}