import Container from 'react-bootstrap/Container';



function LandingPage() {
    return (
        <div className='landingPageCont'>
            <Container fluid="md" className='font-link landingPage'>
                <div className='container'>
                    <div style={{ marginBottom: "10px" }}>
                        Welcome to the Stannp API HubSpot Integration App
                    </div>
                    <div className='buttonsMargin'>
                        <button type="submit" className="btn btn-primary" style={{ height: "200px",  width: "500px", marginLeft: "10px", marginRight: "10px"}}>
                            Create Mail Campaign
                        </button>
                        <button type="submit" className="btn btn-primary" style={{ height: "200px",  width: "500px", marginLeft: "10px", marginRight: "10px"}}>
                            Edit Recipient Data
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default LandingPage;