import React from 'react'

const TopicsBtn = (props) => {
  return (
    <div className='bg-gray-100 rounded-full hover:bg-gray-600 hover:text-white duration-500 ease-out cursor-pointer'><p className='py-1 px-3'>{props.topics}</p></div>
  )
}

export default TopicsBtn