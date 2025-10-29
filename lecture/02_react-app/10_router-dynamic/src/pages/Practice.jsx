import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

/*
  /practice/it/2
  /practice/it/5
  /practice/history/1
  /practice/art/5
*/

function Practice() {

  const {category, id} = useParams()

  return (
    <>
      <nav>
        <Link to="">Practice</Link> | <Link to="It">It</Link>
      </nav>
      <div>Practice</div>
      <div>{category}</div>
      <div>{id}</div>
      <Outlet></Outlet>
    </>
  )
}

export default Practice