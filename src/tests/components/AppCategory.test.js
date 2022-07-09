import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AppCategory } from "../../components/AppCategory"

describe('prueba en AppCategory', () => { 

    const setCategories = () => {}

    const wrapper = shallow (<AppCategory setCategories={setCategories}/>);


    test('Debe de mostrarse correctamente', () => { 

        
        expect(wrapper).toMatchSnapshot();
     });

     test('Debe de cambiar la caja de texto', () => { 

        const input = wrapper.find('input');

        const value = 'vegetta';

        input.simulate('change', { target: {value} });
      })
})
