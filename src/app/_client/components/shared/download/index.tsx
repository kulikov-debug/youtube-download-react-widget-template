"use client"
import { useEffect, useState } from "react"
import Script from "next/script"


export const Download = () =>{
  const [ show, setShow ] = useState(false)

  useEffect(() =>{
    setTimeout(() =>{
      setShow(true)
    }, 100)
  }, [])

  if ( !show ) return <></>
  
  return (
    <>
      <div className="flex justify-center mb-20">
        <iframe className="w-[340px] lg:w-[700px]" id="widgetApiIframe" width="100%" height="100%" style={{border: "none"}} src="https://loader.to/api/widget"></iframe>
        <Script>{`iFrameResize({ log: false }, '#widgetApiIframe')`}</Script>
      </div>
    </>
  )
}