import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import '../App.css';


function RecipientList() {
    return (
        <div className="listTable">
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>CheckBox</th>
                        <th>Title</th>
                        <th>First Name*</th>
                        <th>Last Name / Full Name*</th>
                        <th>Company*</th>
                        <th>Address 1*</th>
                        <th>Address 2*</th>
                        <th>City / Town</th>
                        <th>Countries</th>
                        <th>County / State</th>
                        <th>Postal Code / Zip Code</th>
                        <th>Country</th>
                        <th>Deliverability</th>
                        <th className='actions'>Actions</th>
                        <th>Delete Recipient?</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Miss</td>
                        <td>Joanna</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mrs</td>
                        <td>Joanna</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mrs</td>
                        <td>Joanna</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Miss</td>
                        <td>Joanna</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Mr</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Stannp</td>
                        <td>25, Fake Street</td>
                        <td>-</td>
                        <td>Barnstaple</td>
                        <td>1</td>
                        <td>Devon</td>
                        <td>EX32 1AB</td>
                        <td>GB</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Insights
                            </button>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default RecipientList;