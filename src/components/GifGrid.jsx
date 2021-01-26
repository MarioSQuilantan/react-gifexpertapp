import React/* , { useEffect, useState } */ from 'react'
import { UseFetchGifs } from '../hooks/UseFetchGifs';
import GifGriditem from './GifgGridItem';

const GifGrid = ({ category }) => {

  const { data: images, loading } = UseFetchGifs( category );

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

      { loading && <p className='animate__animated animate__flash'>Loading</p> }

      <div className='card-grid'>
        {
          images.map( img => (
            <GifGriditem
              { ...img }
              key={ img.id }
            />
          ))
        }
      </div>
    </>
  );
}

export default GifGrid;