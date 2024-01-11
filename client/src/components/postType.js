import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Campaign() {
    return (
        <Container style={{ marginTop:"30px" }}>
        <h3 style={{textAlign:"center", 
                    background:"#fff", padding:"20px", 
                    width:"450px", 
                    borderRadius:"25px", 
                    boxShadow: "9px 9px 13px 0px rgba(0,0,0,0.49)" }}>Choose your format</h3>
        <Row style={{ marginTop:"30px"}}>
            
        <Col style={{ height:"350px", marginRight:"10px" }}>
            <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/postcard-preview-A6-landscape.jpg" />
            <Card.Body>
                <Card.Title>A6 Postcard</Card.Title>
                <Card.Text>
                    - 300GSM gloss paper stock <br/>
                    - Full colour double sided <br/>
                    - 148 x 105 millimetres
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
        </Col>
          <Col style={{ height:"350px", marginRight:"10px" }}>
          <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/postcard-preview-a5-landscape.jpg" />
            <Card.Body>
                <Card.Title>A5 Postcard</Card.Title>
                <Card.Text>
                    - 300GSM gloss paper stock <br/>
                    - Full colour double sided <br/>
                    - 210 x 148 millimetres
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col style={{ height:"350px", marginRight:"10px" }}>
          <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/preview-a4-letter.jpg" />
            <Card.Body>
                <Card.Title>A4 Letter</Card.Title>
                <Card.Text>
                    - 100GSM paper stock <br/>
                    - C5 Window Envelope <br/>
                    - 210 x 297 millimetres
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col style={{ height:"350px",}}>
          <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/A5_Enveloped_Image.jpg" />
            <Card.Body>
                <Card.Title>Enveloped Postcard</Card.Title>
                <Card.Text>
                    - 300GSM gloss paper stock <br/>
                    - 210 x 148 millimetres <br/>
                    - Inserted into window C5 envelope
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop:"10px"}}>
          <Col style={{ height:"350px", marginRight:"10px" }}>
          <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/A5_Greetings_Image.jpg" />
            <Card.Body>
                <Card.Title>A5 Tabbed Greeting Card</Card.Title>
                <Card.Text>
                    - 300GSM gloss paper stock <br/>
                    - 210 x 148 millimetres <br/>
                    - Tabbed with clear sticker
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col style={{ height:"350px", marginRight:"10px" }}>
          <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/DL_Image.jpg" />
            <Card.Body>
                <Card.Title>DL Postcard</Card.Title>
                <Card.Text>
                    - 300GSM gloss paper stock <br/>
                    - Full colour double sided <br/>
                    - 210 x 99 millimetres
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col style={{ height:"350px", marginRight:"10px" }}>
          <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/A5_Portrait_image.jpg" />
            <Card.Body>
                <Card.Title>A5 Portrait Postcard</Card.Title>
                <Card.Text>
                    - 300GSM gloss paper stock <br/>
                    - Full colour double sided <br/>
                    - 148 x 210 millimetres
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col style={{ height:"350px",}}>
          <Card style={{ width: 'auto', height: '20rem'}}>
            <Card.Img variant="top" src="https://dash.stannp.com/bulkmailer/assets/img/formats/A3_to_A5_Enveloped_Image.png" />
            <Card.Body>
                <Card.Title>A3 folded to A5</Card.Title>
                <Card.Text>
                    - 100gsm full colour paper <br/>
                    - A3 folded to A5 <br/>
                    - Inserted into a C5 envelope
                </Card.Text>
                <Button style={{ width:"250px", height:"50px", marginBottom:"20px"}} variant="primary">Select</Button>
            </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    );
}

export default Campaign;