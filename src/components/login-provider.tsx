import React, {createContext, useContext, useState, useMemo, useEffect} from 'react'

const userId = sessionStorage.getItem('id')
const token = sessionStorage.getItem('token')

interface props {
    children: React.ReactNode
}

export const LoginContext = createContext({ isLogin: userId !== null && token !== null ? true : false })

export function LoginProvider({ children }:props) {
    const [isLogin, setIsLogin] = useState(userId !== null && token !== null ? true : false)

    const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}