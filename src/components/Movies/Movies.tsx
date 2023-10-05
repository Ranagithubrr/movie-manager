import React from 'react'
import Singlemovie from './MovieCard/Singlemovie'

const Movies = () => {
  return (
    <div className='p-3 grid grid-cols-6 gap-10 pt-5'>
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
        <Singlemovie />
    </div>
  )
}

export default Movies