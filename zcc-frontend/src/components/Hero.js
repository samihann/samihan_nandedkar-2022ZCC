import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Table, Button, Alert} from 'react-bootstrap';
import axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css'
import ReactLoading from 'react-loading';
import {BiError} from "react-icons/bi";

const columns = ["ID", "Subject", "Assignee ID", "Organization ID","Created At", "Status"];

const Content = styled.div`
  width: 96%;
  height: 90%;
  margin: auto;
`;

function Hero() {

  const [data, setData] = useState([])
  const [rowData1, setRowData1] = useState()
  const [isOpen, setIsOpen] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [viewAlert, setViewAlert] = useState(true);
  const [gotError, setGotError] = useState(false);
  const [gotModalError, setGotModalError] = useState(false);

  function rowsSelect(rowData, rowMeta) {
    var id = rowData[0]
    axios.post('http://localhost:5000/single-tickets',{ticketId: id})
    .then(response => {
      var tickets1 = response.data.ticket
      setRowData1(tickets1)
      console.log(rowData1)
      })
    .catch(error => {
      setGotModalError(true)
      console.log(error);
    });

    setIsOpen(true)
    
  };

  const options = {
    selectableRows: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25],
    onRowClick: rowsSelect,
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setViewAlert(false)
    }, 7000);
    axios.get('http://localhost:5000/all-tickets')
  .then(response => {
    console.log(response.status)
    var tickets = response.data.tickets
    var data1 = []
    Object.values(tickets).map(item =>
      {
        var temp = [item.id, item.subject, item.assignee_id, item.organization_id, item.created_at, item.status ]
        data1.push(temp)
      })
    setData(data1)
    setViewData(true)
    })
  .catch(error => {
    setGotError(true)
    console.log(error);
  });
  }, []);

  return (
    <Content>
  <div>
  {gotError && (
    <div className="error">
      <BiError size={80}/>
      <br/>
      Ohh Snap!
      <br/> 
      Some Error Occured.
      <br/> 
      Data could not be fetched.
    </div>
  )}
 {!gotError && (<>
  {(<Alert variant="info" show={viewAlert}>
        <Alert.Heading>Welcome.</Alert.Heading>
        <p>
          All the tickets for account are listed below. 
          <br/>
          <b>Please click on the ticket to view additional information for the same.</b>
        </p>
  </Alert>)}
  

  {!viewData && (<div className="loader"><ReactLoading type="bars" color="#1c47e6" height={'5%'} width={'5%'} /></div>)}
  {viewData && (<MUIDataTable 
    title={"Tickets List"} 
    data={data} 
    columns={columns} 
    options={options}
  />)}

  {rowData1!= undefined && (<Modal 
  dialogClassName="my-modal"
  show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Information of Ticket Selected</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {gotModalError && (
          <div className="error">
            <BiError size={80}/>
            <br/>
            Ohh Snap!
            <br/> 
            Some Error Occured.
            <br/> 
            Data could not be fetched.
          </div>
        )}
          {!gotModalError && (<Table>
            <thead>
              <tr>
              <th>Parameter</th>
              <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{rowData1["id"]}</td>
              </tr>
              <tr>
                <td>SUBJECT:</td>
                <td>{rowData1["subject"]}</td>
              </tr>
              <tr>
                <td>DESCRIPTION:</td>
                <td>{rowData1["description"]}</td>
              </tr>
              <tr>
                <td>STATUS:</td>
                <td>{rowData1["status"]}</td>
              </tr>
              <tr>
                <td>TAGS:</td>
                <td>{rowData1["tags"].map(i => i)}</td>
              </tr>
              <tr>
                <td>CREATED-AT:</td>
                <td>{rowData1["created_at"]}</td>
              </tr>
              <tr>
                <td>ASSIGNEE ID:</td>
                <td>{rowData1["assignee_id"]}</td>
              </tr>
              <tr>
                <td>ORGANIZATION ID:</td>
                <td>{rowData1["organization_id"]}</td>
              </tr>
              <tr>
                <td>INCIDENTS:</td>
                <td>{rowData1["has_incidents"]}</td>
              </tr>
              <tr>
                <td>TICKET FORM ID:</td>
                <td>{rowData1["has_incidents"]}</td>
              </tr>
              <tr>
                <td>INCIDENTS:</td>
                <td>{rowData1["ticket_form_id"]}</td>
              </tr>
              <tr>
                <td>UPDATED-AT:</td>
                <td>{rowData1["updated_at"]}</td>
              </tr>
            </tbody>
          </Table>)}

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> window.open(rowData1["url"], "_blank")}>
            Open Ticket
          </Button>
        </Modal.Footer>
  </Modal>)}</>)}
  </div>
    </Content>
  );
};

export default Hero;
