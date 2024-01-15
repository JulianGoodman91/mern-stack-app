import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function DesignPage() {
    return (
        <div className='designPageDiv' style={{ height:"80vh" }}>
            <div className="designButtons">
                <ButtonGroup size="lg" className="mb-2">
                    <Button>Stannp Templates</Button>
                    <Button>Your Templates</Button>
                    <Button>Upload PDF Templates</Button>
                </ButtonGroup>
            </div>
            
            <div>
                <Container>

                    <Row>
            
                        <Col style={{ height:"350px", marginRight:"10px" }}>
                            <Card style={{ maxWidth:"400px", width: 'auto', height: 'auto', marginTop:"70px"}}>
                            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/postcard-preview-A6-landscape.jpg" />
                                <Card.Body style={{ height:"250px", display:"flex", flexDirection:"column", justifyContent:"space-around" }}>
                                    <Card.Title><h3>Blank Canvas</h3></Card.Title>
                                        <Card.Text>
                                            <h5>A6</h5>
                                        </Card.Text>
                                    <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col style={{ height:"350px", marginRight:"10px" }}>
                        <Card style={{ maxWidth:"400px", width: 'auto', height: 'auto', marginTop:"70px"}}>
                            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/postcard-preview-a5-landscape.jpg" />
                                <Card.Body style={{ height:"250px", display:"flex", flexDirection:"column", justifyContent:"space-around" }}>
                                    <Card.Title><h3>Your Templates</h3></Card.Title>
                                        <Card.Text>
                                            <h5>A6</h5>
                                        </Card.Text>
                                    <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col style={{ height:"350px", marginRight:"10px" }}>
                        <Card style={{ maxWidth:"400px", width: 'auto', height: 'auto', marginTop:"70px"}}>
                            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/preview-a4-letter.jpg" />
                                <Card.Body style={{ height:"250px", display:"flex", flexDirection:"column", justifyContent:"space-around" }}>
                                    <Card.Title><h3>Upload PDF Template</h3></Card.Title>
                                        <Card.Text>
                                            <h5>A6</h5>
                                        </Card.Text>
                                    <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>     
                </Container>  
            </div>
        </div>
    );
}

export default DesignPage;