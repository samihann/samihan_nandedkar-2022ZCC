import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Table, Form} from 'react-bootstrap';
import axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BiError} from "react-icons/bi";

const Content = styled.div`
  width: 96%;
  height: 90%;
  margin: auto;
`;

function SingleView() {

  const [data, setData] = useState()
  const [id, setId] = useState("")
  const [viewTable, setViewTable] = useState(false)
  const [gotError, setGotError] = useState(false);

  function updateInput(e){
    e.preventDefault()
    setId(e.target.value)
    console.log(id)
  }

  const click = () => {
    console.log(id)
    axios.post('http://localhost:5000/single-tickets',{ticketId: id})
    .then(response => {
      var tickets1 = response.data.ticket
      console.log(tickets1)
      setData(tickets1)
      setViewTable(true)
      })
    .catch(error => {
      setGotError(true)
      console.log(error);
    });

  }

  return (
    <Content>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ticket ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" required="true" onChange={(e) => {
            updateInput(e);
          }} />
        <Form.Text className="text-muted">
          Please input the the ticket id to view
        </Form.Text>
        <br/>
        <Button className="" variant="secondary" onClick={click}>
            Search
        </Button>
      </Form.Group>
      </Form>
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
  {(viewTable && data && !gotError) && (<Table>
            <thead>
              <tr>
              <th>Parameter</th>
              <th>Value</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>ID:</td>
                <td>{data["id"]}</td>
              </tr>
              <tr>
                <td>SUBJECT:</td>
                <td>{data["subject"]}</td>
              </tr>
              <tr>
                <td>DESCRIPTION:</td>
                <td>{data["description"]}</td>
              </tr>
              <tr>
                <td>STATUS:</td>
                <td>{data["status"]}</td>
              </tr>
              <tr>
                <td>TAGS:</td>
                <td>{data["tags"].map(i => i)}</td>
              </tr>
              <tr>
                <td>CREATED-AT:</td>
                <td>{data["created_at"]}</td>
              </tr>
              <tr>
                <td>ASSIGNEE ID:</td>
                <td>{data["assignee_id"]}</td>
              </tr>
              <tr>
                <td>ORGANIZATION ID:</td>
                <td>{data["organization_id"]}</td>
              </tr>
              <tr>
                <td>INCIDENTS:</td>
                <td>{data["ticket_form_id"]}</td>
              </tr>
              <tr>
                <td>UPDATED-AT:</td>
                <td>{data["updated_at"]}</td>
              </tr>
              <tr>
                <td>INCIDENTS:</td>
                <td>{data["has_incidents"]}</td>
              </tr>
              <tr>
                <td>TICKET FORM ID:</td>
                <td>{data["has_incidents"]}</td>
              </tr>
            </tbody>
          </Table>)}
  </div>
    </Content>
  );
};

export default SingleView;
