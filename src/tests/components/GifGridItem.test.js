import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";


describe('Probar el componente GifGridItem', () => { 

    const title = 'Un titulo';

    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow( <GifGridItem title={title} url={url}/>);


    test('Debe de mostrar el componente correcto', () => { 

        expect(wrapper).toMatchSnapshot()

    });

    test('Debe de tener un parro con el title', () => { 

        const parrafo = wrapper.find('p').text().trim();

        expect(parrafo).toBe(title);

    });

    test('Debe de tener una imagen al url y un alt de los props', () => {

        const img = wrapper.find('img').props();

        expect(img.src).toBe(url);
        expect(img.alt).toBe(title);

    });

    test('Debe de tener la clase animate__bounceIn', () => { 

        const div = wrapper.find('div').props().className;

        expect(div.includes('animate__bounceIn')).toBe(true);
     })
 })