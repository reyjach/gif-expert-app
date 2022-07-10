import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => { 

    test('Debe de retornar el estado inicla', async() => { 
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Goku' ));

        await waitForNextUpdate;

        const { data, loading } = result.current;

        //console.log(data, loading);

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
     });

     test('Debe de retornar un arreglo de imgs y el loadding en false', async() => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Goku' ));
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        //console.log(data, loading);

        expect( data.length ).toBe( 12 );
        expect( loading ).toBe(false);

      })
 })