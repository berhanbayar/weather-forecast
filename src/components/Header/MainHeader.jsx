import React from 'react'
import Inputs from './Inputs'
import TopButtons from './TopButtons'
function MainHeader({setQuery}) {
  return (
    <div>
        <Inputs setQuery={setQuery}/>
        <TopButtons setQuery={setQuery}/>
    </div>
  )
}

export default MainHeader