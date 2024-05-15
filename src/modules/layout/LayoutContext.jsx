import { createContext, useContext, useState } from 'react'

const initLayoutState = {
  pageTitle: '',
  actionSetPageTitle: () => {}
}

const LayoutContext = createContext(initLayoutState)


const useLayout = () => {
  return useContext(LayoutContext)
}

const LayoutProvider = ({children}) => {
  const [pageTitle, setPageTitle] = useState('')

  const actionSetPageTitle = (title) => {
    setPageTitle(title)
  }

  return (
    <LayoutContext.Provider value={{pageTitle, actionSetPageTitle}}>
      {children}
    </LayoutContext.Provider>
  )
}

export {useLayout, LayoutProvider}