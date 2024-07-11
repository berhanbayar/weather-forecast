import React from 'react'
import TempAndDetails from './TempAndDetails'
import TimeAndLocation from './TimeAndLocation'


function MainContent({ data }) {
  return (
    <div>
        <TimeAndLocation  data={data} />
        <TempAndDetails data={data}/>
    </div>
  )
}

export default MainContent