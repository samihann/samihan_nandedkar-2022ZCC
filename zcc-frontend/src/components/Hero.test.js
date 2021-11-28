import React from "react"
import ReactDOM from "react-dom"
import Hero from './Hero'
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Hero', () => {
    it('should render correctly', () => {
        const component = shallow(<Hero />);
      
        expect(component).toMatchSnapshot();
      });
 });