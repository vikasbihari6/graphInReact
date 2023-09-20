import React from 'react'

const FinancialManagement = ({data,text}) => {
  return (
    <div>
      <div className='text-center fs-5'>{text}</div>
      <div className='text-center fs-3'>{data}</div>
    </div>
  )
}

export default FinancialManagement;
