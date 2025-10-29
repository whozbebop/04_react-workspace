import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Setting() {

  const {numOfUsers, numOfOrders} = useOutletContext() // {numOfUsers: xxx, numOfOrders: xxx}

  return (
    <>
      <div>Setting</div>
      <div>{numOfUsers}</div>
      <div>{numOfOrders}</div>
    </>
  )
}

export default Setting