import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import '../App.css';


function CampaignOptions() {
  return (
    <Container className="optionsContainer">
        <div>      
            <Row className="optionsContainerRow">
                <Col className="partOne">
                    <h4>Campaign Options: Set your campaign settings.</h4>
                    <div>
                        <h5>Name your campaign</h5>
                        <Form.Control type="text" placeholder="January Campaign" />

                    </div>
                    <div>
                        <h5>Choose a postage Class</h5>
                        <p>Is this an Advertising Campaign?</p>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </div>

                    <div>
                        Three

                    </div>

                    <div>
                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>Campaign Upgrades</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Campaign upgrades <br/><br/>
                                Select from various addons below to upgrade your campaign. <br/><br/>
                                STOCK_350_UNCOATED <br/>
                                Upgrade your paper stock to a thicker more premium 350gsm uncoated paper stock <br/><br/>
                                STOCK_350_SILK <br/>
                                Upgrade your paper stock to a thicker more premium 350gsm silk coated stock
                            </p>
                        </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </div>

                    <div style={{ marginTop:"20px" }}>
                        <Form.Select aria-label="Default select example">
                            <option>Select Country</option>
                            <option value="1">U.S.A</option>
                            <option value="2">United Kingdom</option>
                            <option value="3">Canada</option>
                            <option value="1">Other Countries</option>
                            <option value="2">Mixed Countries</option>
                            </Form.Select>
                            <div>
                                <p>Less than 4,000	£0.75</p> <hr/> 
                                <p>4,000 or more	£0.48</p> <hr/> 
                                <p>20,000 or more	£0.42</p> <hr/> 
                                <p>50,000 or more	£0.37</p> 
                            </div>

                        <Col className="partTwo"></Col> 
                    </div>
                </Col>

                <Col>
                    <p>
                        Advertising Mail <br/><br/>
                        Advertising mail can benefit from discounted rates. You should only select Advertising mail if your mail adheres to one of the following.<br/>

                        Promoting the sale or use of products.<br/>
                        Promoting the sale or use of a service.<br/>
                        Encouraging a donation to a cause.<br/>
                        If you select Advertising mail and do not comply, your mail could be quarantined during production. Please contact us if you are unsure.<br/><br/>

                        Campaign Upgrades<br/>
                        You can select from various upgrades such as a premium paper stock. If you have agreed custom addon codes with us they will appear here.<br/><br/>

                        Confidential Mail<br/>
                        If your mail is highly sensitive we advise you to select confidential mail. Confidential mail is separated during production and produced in an area with extra security measures.<br/>
                    </p>
                </Col>
            </Row>
        </div>
    </Container>
  );
}

export default CampaignOptions;