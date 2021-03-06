import React from "react"
import ReactDOM from "react-dom"
import Navbar from './Navbar'
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
    it('should render correctly', () => {
        const component = shallow(<Navbar />);
      
        expect(component).toMatchSnapshot();
      });
 });