import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AppCategory } from "../../components/AppCategory"

describe('prueba en AppCategory', () => { 

    const setCategories = jest.fn();

    let wrapper = shallow (<AppCategory setCategories={setCategories}/>);

    beforeEach ( () => {
      jest.clearAllMocks();

      wrapper = shallow (<AppCategory setCategories={setCategories}/>);
    })


    test('Debe de mostrarse correctamente', () => { 

        
        expect(wrapper).toMatchSnapshot();
     });

     test('Debe de cambiar la caja de texto', () => { 

        const input = wrapper.find('input');

        const value = 'vegetta';

        input.simulate('change', { target: {value} });
      });

      test('No debe de postear la informacion', () => { 

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

       });

       test('Debe de llamar el setCategories y limpiar la caja', () => { 
        
        const input = wrapper.find('input');


        const value = 'vegetta';

        input.simulate('change', { target: {value} });

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        const valu = wrapper.find('input').props().value

        expect(setCategories).toHaveBeenCalled();  //si se llama la funcion

        expect(setCategories).toHaveBeenCalledTimes(1); // si se llama un numero de n

        expect(setCategories).toHaveBeenCalledWith( expect.any(Function)); // si se llama a una funcion

        expect(valu).toBe('');

        })
})
