import React from 'react'

const CustomImage = ({src,text, title}) => {
  return (
    <div>
    <img src={src} className="p-1 border-2 border-third rounded-md my-auto mx-auto" />
    <h3 className='text-center pt-2 font-black uppercase text-xl'>{title}</h3>
    <p className='text-center pt-2 '>{text}</p>

    </div>
  )

}

export default CustomImage