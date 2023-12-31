import React from 'react'

export default function HomeBanner() {
  return (
    <div className='relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8'>
      <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
        <div className='mb-8 md:mb-0 text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Test</h1>
            <p className='text-lg md:text-xl text-white mb-2'>1</p>
            <p className='text-lg md:text-xl text-white mb-2'>2</p>
        </div>
        <div className='w-1/3 relative aspect-video'></div>
      </div>
    </div>
  )
}
