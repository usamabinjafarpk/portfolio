import React from 'react'
import Header from '../Header'

export default function Home({current,setCurrent}) {
   
  return (
    <div>
        <Header setCurrent={setCurrent}/>
        <div className=''>
            <img src='abc.png'/>
        </div>
    </div>
  )
}
