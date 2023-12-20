import React, { useState } from 'react'

const LoginLogic = () => {

    const [loginMethod , setLoginMethod] = useState(null);

    const setLoginMethodType = (type)=>{
        setLoginMethod(type);
    }

    



  return {
    loginMethod,
    setLoginMethodType
  }
}

export default LoginLogic