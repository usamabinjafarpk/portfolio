import React from 'react'
import Home from './Home'
import Profile from './Profile'

export default function index({current , setCurrent}) {
  return (
    <div>
      {current === "home" ? (
        <Home setCurrent={setCurrent}/>
      ): current === "profile" && (
        <Profile setCurrent={setCurrent}/>
      )}
    </div>
  )
}
