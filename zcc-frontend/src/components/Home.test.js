import React from "react"
import ReactDOM from "react-dom"
import Home from './Home'
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
    it('should render correctly', () => {
        const component = shallow(<Home />);
      
        expect(component).toMatchSnapshot();
      });
 });