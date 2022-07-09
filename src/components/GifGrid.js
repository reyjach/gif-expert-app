import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data:images, loading }  = useFetchGifs( category );

    return (
        <>
            <h3 className='card animate__animated animate__bounceOutRight'>{category}</h3>
            {loading && <p className='card animate__animated animate__fadeOut'>Loading</p> }
            <div className='card-grid'>             
                { 
                    images.map(img => (
                    <GifGridItem key={img.id} {...img}/>
                    )) 
                }
            </div>
        </>
        
    )
}
GifGrid.propTypes = {
    category:PropTypes.string.isRequired
  }