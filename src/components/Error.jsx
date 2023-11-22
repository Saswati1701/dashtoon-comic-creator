import React, { useEffect } from 'react'

const Error = ({errorText, clearError}) => {

  useEffect(()=> {
    setTimeout(()=> {
        clearError();
    }, 4000)
  }, []);

  return (
    <div className='error'>
        {errorText}
    </div>
  )
}

export default Error