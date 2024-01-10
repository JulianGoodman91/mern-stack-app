import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';



function RecipientCreate() {
    return (
        <div className='recipientOuter'>
            <div className="createRecipientDiv">
                <h2> Create New Recipient </h2>
                <Form>
                <Row>
                    <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                        >
                        <Form.Control placeholder="First Name" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Last Name" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Company"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Company" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Phone Number"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Phone Number" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Email" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Address 1*"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Address 1" />
                        </FloatingLabel>
                    </Col>
                <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Address 2*"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Address 2" />
                        </FloatingLabel>
                    </Col>
                <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="City"
                        className="mb-3"
                        >
                        <Form.Control placeholder="City" />
                        </FloatingLabel>
                    </Col>
                <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="County"
                        className="mb-3"
                        >
                        <Form.Control placeholder="County" />
                        </FloatingLabel>
                    </Col>
                <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="PostCode"
                        className="mb-3"
                        >
                        <Form.Control placeholder="PostCode" />
                        </FloatingLabel>
                    </Col>
                <Col>
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Country"
                        className="mb-3"
                        >
                        <Form.Control placeholder="Country" />
                        </FloatingLabel>
                    </Col>
                    <button type="submit" className="btn btn-primary">
                        Create New Recipient
                    </button>
                </Form>
            </div>  
        </div>
    );
}

export default RecipientCreate;