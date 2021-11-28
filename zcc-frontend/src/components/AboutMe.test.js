import React from "react"
import ReactDOM from "react-dom"
import AboutMe from './AboutMe'
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('AboutMe', () => {
    it('should render correctly', () => {
        const component = shallow(<AboutMe />);
      
        expect(component).toMatchSnapshot();
      });
 });