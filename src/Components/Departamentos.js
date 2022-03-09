import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Departamentos extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Departamentos')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { deps } = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr key={dep.idDepartamento}>
                                <td>{dep.idDepartamento}</td>
                                <td>{dep.nombre}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}