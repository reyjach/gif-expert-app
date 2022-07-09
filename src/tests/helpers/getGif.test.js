import { getGif } from '../../helpers/getGif';


describe('prueba en getGif', () => { 

    test('Debe de traer 12 elelemntos', async() => { 

        const gifs = await getGif('auronplay');

        expect(gifs.length).toBe(12);
     });

     test('Debe de traer 0 elementos', async() => { 

        const gifs = await getGif('');

        expect(gifs.length).toBe(0);
     })
})