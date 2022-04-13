import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import PageHeader from '../ui-components/PageHeader'
import { useGlobalContext } from '../useGlobalContext'

const HomePage = () => {
  const { messages, setMessages } = useGlobalContext()
  const [inputValue, setInputValue] = useState('')
  const [averageWords, setAverageWords] = useState<number>(0)

  useEffect(() => {
    let totalWords = 0
    if (messages.length > 0) {
      messages.forEach((m) => (totalWords += m.message?.split(' ')?.length))
      setAverageWords(Math.round(totalWords / messages.length))
    }
  }, [messages])

  const handleSubmit = () => {
    const shallowCopy = [
      ...messages,
      { message: inputValue, timestamp: dayjs() },
    ]
    setMessages(shallowCopy)
  }

  return (
    <>
      <PageHeader aToggled={true} />
      <h1>Page A!</h1>
      <input
        maxLength={200}
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event?.target?.value)}
        style={{minWidth:'20rem'}}
      ></input>
      <button onClick={() => handleSubmit()}>Submit</button>
      <h3>Average number of words: {averageWords}</h3>
      <ul>
        {messages.map((entry, i) => (
          <li key={`${entry.message}${entry.timestamp.format()}`}>{`${
            entry.message
          } - ${entry.timestamp.format()}`}</li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
