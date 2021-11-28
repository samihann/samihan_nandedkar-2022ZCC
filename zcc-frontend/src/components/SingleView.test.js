import React from "react"
import ReactDOM from "react-dom"
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleView from './SingleView'
Enzyme.configure({ adapter: new Adapter() });

describe('SingleView', () => {
    it('should render correctly', () => {
        const component = shallow(<SingleView />);
      
        expect(component).toMatchSnapshot();
      });
 });