import React from 'react'
import Sidebar from "./Sidebar"

const Layout = ({children}) => {
  return (
    <div className="flex lg:flex-row flex-col lg:my-4 lg:mx-4">
        <div className="sidebar px-2 sticky self-start top-0 w-full z-10 lg:block lg:w-3/12">
          <Sidebar/>
        </div>
        <div className="main mx-2 lg:w-9/12 grow">
          {children}
        </div>
      </div>
  )
}

export default Layout
