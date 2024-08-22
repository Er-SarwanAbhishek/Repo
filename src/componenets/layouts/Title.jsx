import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className='flex flex-col gap-4 font-titleFont'>  <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>{title}</h3>
<h2 className='text-4xl text-gray-300 font-bold capitlize'>{des}</h2>
</div>
  )
}

export default Title
