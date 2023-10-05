import React from 'react'

const Singlemovie = () => {
  return (
    <div className='shadow-md px-4 py-2'>
        <div>
            <img src="https://assets.mycast.io/posters/world-war-hulk-2023-miniseries-fan-casting-poster-219057-medium.jpg?1658634732" alt="movie image" 
            className='
            h-48
            w-full
            '
            />
        </div>
        <div>
                <span className='font-semibold block text-sm'>ID: 1</span>
                <span className='font-semibold block text-sm'>Episode No: S02E01</span>                
                <span className='font-bold block text-lg'> A Rickle in Time</span>
        </div>
    </div>
  )
}

export default Singlemovie