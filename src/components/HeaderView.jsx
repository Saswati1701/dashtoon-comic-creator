import React from 'react'
import Logo from  '../images/logo.png'

const HeaderView = () => {
  return (
    <div className='header'>
      <img src={Logo} alt="Dashtoon Logo" width="40px" />
      <h3>Dashtoon | Create Your Comic Here!</h3>
    </div>
  )
}

export default HeaderView