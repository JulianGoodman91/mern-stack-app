import React from 'react'
import Table from 'react-bootstrap/Table';
import '../App.css';

function RecipientDataSelect() {
    return (
        <div className="groupTable">
                <h3 style={{textAlign:"center", 
                    background:"#fff", padding:"20px", 
                    width:"450px",
                    marginBottom: "30px", 
                    borderRadius:"25px", 
                    boxShadow: "9px 9px 13px 0px rgba(0,0,0,0.49)" }}>Select Recipient Group
                </h3>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Group Name</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Total Recipients</th>
                        <th>Verified</th>
                        <th>Not Verified</th>
                        <th>Other International</th>
                        <th>Countries</th>
                        <th>Heath Check</th>
                        <th className='actions'>Actions</th>
                        <th>Delete Recipient Group?</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_1</td>
                        <td> - </td>
                        <td>03/01/2024</td>
                        <td>2</td>
                        <td>09/12/2023</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_2</td>
                        <td> - </td>
                        <td>07/01/2024</td>
                        <td>5</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_3</td>
                        <td> - </td>
                        <td>03/01/2024</td>
                        <td>3</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_4</td>
                        <td> - </td>
                        <td>07/01/2024</td>
                        <td>7</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_5</td>
                        <td> - </td>
                        <td>03/01/2024</td>
                        <td>6</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_6</td>
                        <td> - </td>
                        <td>07/01/2024</td>
                        <td>5</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_7</td>
                        <td> - </td>
                        <td>03/01/2024</td>
                        <td>9</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_8</td>
                        <td> - </td>
                        <td>07/01/2024</td>
                        <td>4</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_9</td>
                        <td> - </td>
                        <td>03/01/2024</td>
                        <td>5</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_10</td>
                        <td> - </td>
                        <td>07/01/2024</td>
                        <td>34</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_11</td>
                        <td> - </td>
                        <td>03/01/2024</td>
                        <td>65</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_12</td>
                        <td> - </td>
                        <td>07/01/2024</td>
                        <td>2</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_13</td>
                        <td> - </td>
                        <td>03/01/2024</td>
                        <td>22</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>GROUP_14</td>
                        <td> - </td>
                        <td>07/01/2024</td>
                        <td>4</td>
                        <td>07/01/2024</td>
                        <td>0</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                View Recipients
                            </button>
                        </td>
                        <td  className='actions'>              
                            <button type="submit" className="btn btn-primary">
                                Select this Group
                            </button>
                        </td>

                    </tr>
                </tbody>
            </Table>

            
        </div>
    )
}

export default RecipientDataSelect;