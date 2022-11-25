import React from 'react'

const SmallTag = ({children}) => {
  return (
    <div className='bg-[#ACFFAC] py-1 px-2 font-bold text-[#006600] text-[8px] rounded-[4px]'>
        {children}
    </div>
  )
}

export default SmallTag