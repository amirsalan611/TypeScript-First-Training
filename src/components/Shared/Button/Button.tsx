import React from 'react'

interface Iprops {
  className?:string,
  content:string,
  onclick:()=>void
}

export default function Button({className , content ,onclick}:Iprops) {
  return <button 
  className={className}
  onClick={onclick}
  >{content}</button>;
}
