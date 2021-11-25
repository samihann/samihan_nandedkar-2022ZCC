import React from "react"
import ReactDOM from "react-dom"
import Navbar from './Navbar'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
    it('Should be true', () => {
        const toggleInstance = shallow(<Navbar />);
       const test = true;
       expect(test).toBe(true);
    });
 });