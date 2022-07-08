import React, { useState } from 'react'
import { AppCategory } from './components/AppCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Hola','Minecraft','Google'];
    const [categories, setCategories] = useState(['Minecraft']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AppCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                { categories.map( category => (
                    <GifGrid 
                        category = {category}
                        key={category}
                    />
                ))}
            </ol>
        </>
    )
}

export default GifExpertApp

