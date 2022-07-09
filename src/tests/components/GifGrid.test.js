import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Prueba de GifGrid', () => { 

    const category = 'hola mundo';

    test('Debe de mostrarse correctamente', () => { 

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar item cuando se cargan imagenes useFetchGifs', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'https://localhost/img.jpg',
            url: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot()
    })
 })