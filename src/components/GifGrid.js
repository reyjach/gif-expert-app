import React, { useEffect } from 'react'

export const GifGrid = ({ category }) => {

    useEffect ( () => {
        getGif();
    }, [])

    const getGif = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=suiza&limit=12&api_key=jjP8UKZa7PU3Vd78dqJNmODFLw1B5oDs';

        const resp = await fetch( url );

        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);

    }

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}
