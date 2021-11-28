import React from "react"
import ReactDOM from "react-dom"
import Docs from './Docs'
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Docs', () => {
    it('should render correctly', () => {
        const component = shallow(<Docs />);
      
        expect(component).toMatchSnapshot();
      });
 });