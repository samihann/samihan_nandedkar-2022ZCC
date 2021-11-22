import React from "react";
import styled from 'styled-components';
import {BiCopyright} from "react-icons/bi"
const Foot = styled.div`
text-align: justify;
`

function Footer() {
  return (
    <Foot>
      <BiCopyright/> Samihan Nandedkar (2022 Internship Zendesk Coding Challenge)
    </Foot>
  );
}

export default Footer;