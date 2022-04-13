import dayjs from 'dayjs'
import React, { useContext, useState } from 'react'

export type StringEntry = {
  message: string
  timestamp: dayjs.Dayjs
}

type Context = {
  messages: StringEntry[]
  setMessages: (messages: StringEntry[]) => void
}

const defaultState: Context = {
  messages: [{ message: 'TEST', timestamp: dayjs() }],
  setMessages: () => {},
}

const GlobalContext = React.createContext<Context>(defaultState)

export const useGlobalContext = () => {
  const globalContext = useContext(GlobalContext)
  return globalContext
}

export const GlobalContextProvider = ({
  children,
}: {
  children: JSX.Element[]
}) => {
  const [messages, setMessages] = useState<StringEntry[]>([])

  return (
    <GlobalContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
