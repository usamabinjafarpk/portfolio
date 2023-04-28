import React from 'react'
import { useState } from 'react'
import Main from '../components/Main/Index'

export default function index() {

  const [current,setCurrent]=useState("home")
  return (
    <div>
    <Main current={current} setCurrent={setCurrent}/>
    </div>
  )
}
