import React, { createContext, useContext, useEffect, useState } from 'react'
const ThemeContext = createContext()
export function useTheme(){ return useContext(ThemeContext) }
export function ThemeProvider({children}){
  const [theme, setTheme] = useState(()=> localStorage.getItem('app:theme') || 'light')
  useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('app:theme', theme) }, [theme])
  const toggle = ()=> setTheme(t=> t==='light'?'dark':'light')
  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}
