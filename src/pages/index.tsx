import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div>Welcome to Linden's NextJS Demo</div>
      <Link href="/pagea">
        <a>Page A</a>
      </Link>
      <br/>
      <Link href="/pageb">
        <a>Page B</a>
      </Link>
    </>
  )
}

export default HomePage
