import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Probar el componente GifExpertApp', () => { 


    test('Debe de mostrar el componente', () => { 

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de categorias', () => { 

        const categories = ['Goku','auronplay'];

        const wrapper = shallow( <GifExpertApp defauldCategories={categories}/> );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('GifGrid').length ).toBe(categories.length)
     })
 })