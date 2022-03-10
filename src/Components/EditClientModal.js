import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditClientModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Clientes', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idCliente: event.target.idCliente.value,
                nombres: event.target.nombres.value,
                nit: event.target.nit.value,
                telefono: event.target.telefono.value,
                email: event.target.email.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }

    render() {
        return (
            <div className="container">
                <Modal {...this.props}
                    size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modificar Cliente
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="idCliente">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="idCliente" required disabled 
                                        defaultValue={this.props.clientId} placeholder="ID Cliente" />
                                    </Form.Group>

                                    <Form.Group controlId="nombres">
                                        <Form.Label>Nombre del Cliente</Form.Label>
                                        <Form.Control type="text" name="nombres" required 
                                        defaultValue={this.props.clientName} placeholder="Nombre Cliente" />
                                    </Form.Group>

                                    <Form.Group controlId="nit">
                                        <Form.Label>NIT</Form.Label>
                                        <Form.Control type="text" name="nit" required 
                                        defaultValue={this.props.clientnit} placeholder="NIT" />
                                    </Form.Group>

                                    <Form.Group controlId="telefono">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control type="text" name="telefono" required 
                                        defaultValue={this.props.clienttel} placeholder="Telefono" />
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" name="email" required 
                                        defaultValue={this.props.clientmail} placeholder="E-mail" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Actualizar Cliente
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}