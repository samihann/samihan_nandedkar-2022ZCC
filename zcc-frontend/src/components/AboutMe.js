
import React from 'react';
import styled from 'styled-components';
import BgImg from '../assets/bkgimg.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useHistory } from "react-router-dom";
import {Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: 10%;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;


function AboutMe () {
  const history = useHistory();

  const newPage = () => {
    history.push('/alltickets')
  }
  

  
  return (
    <Section>

      <Card style={{ width: '50rem', height: '25rem' }}>
      <Card.Body>
        <Card.Title>Samihan Nandedkar</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">About Me</Card.Subtitle>
        <Card.Text>
          Hi,
          <br/>
          This demo application is created as a submision for 2022 Internship Zendesk Coding Challenge.
          <br/>
          Details:
          <li>Name: Samihan Nandedkar</li>
          <li>Email: svn2998@gmail.com</li>
          <li>Linkedin: https://www.linkedin.com/in/samihann/</li>
          <li>Personal Website: https://www.samihann.com/</li>
          <li>Github: https://github.com/samihann</li>
          <br/>
          Please click below to access.
        </Card.Text>
        <Card.Link href="https://www.linkedin.com/in/samihann/">Linkedin</Card.Link>
        <Card.Link href="https://github.com/samihann">Github</Card.Link>
        <Card.Link href="https://www.samihann.com/">Personal Portfolio</Card.Link>
      </Card.Body>
    </Card>

    </Section>
  );
};

export default AboutMe;