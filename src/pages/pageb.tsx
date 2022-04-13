import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PageHeader from '../ui-components/PageHeader'

type CharacterInfo = {
  name: string
  species: string
}

const NA = 'n/a'

const HomePage = () => {
  const [inputValue, setInputValue] = useState('')
  const [results, setResults] = useState<CharacterInfo[]>([])

  const handleListItemClick = async (speciesLink: string) => {
    if (speciesLink !== NA) {
      const speciesName = (await axios.get(speciesLink))?.data?.name
      alert(`species: ${speciesName}`)
    } else {
      alert('species unknown')
    }
  }

  useEffect(() => {
    const searchSwapi = async (searchTerm: string) => {
      const resp = await axios.get(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      )
      const parsedResults: CharacterInfo[] = resp?.data?.results?.map((r) => {
        return { name: r.name, species: r.species[0] ?? NA }
      })
      setResults(parsedResults)
    }

    if (inputValue.length > 2) {
      searchSwapi(inputValue)
    }
  }, [inputValue])

  return (
    <>
      <PageHeader aToggled={false} />
      <h1>Page B!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event?.target?.value)}
        style={{ minWidth: '20rem' }}
      ></input>
      <ul>
        {results.map((r) => (
          <li
            onClick={() => handleListItemClick(r.species)}
            key={r.name}
            style={{ cursor: 'pointer' }}
          >
            <span>{`${r.name}`}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
