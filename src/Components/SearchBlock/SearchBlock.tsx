import React, { useState } from 'react'
import { SearchAPI } from '../../Service/api'
import { PlanetType } from '../../Types/Types'
import SearchResult from '../SearchResult/SearchResult'
import Spinner from '../../Common/Spinner/Spinner'
import _ from 'lodash'
import './SearchBlock.css'

const SearchBlock: React.FC = () => {
    const [inputVal, setInputVal] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [planetsData, setPlanetsData] = useState<PlanetType[] | null>(null)
    const [error, setError] = useState(false)

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const typedVal = e.target.value.trim()
        setInputVal(typedVal)

        if (!_.isEmpty(typedVal)) {
            requestPlanets(typedVal)
        } else {
            setPlanetsData(null)
        }
    }

    const requestPlanets = async (str: string) => {
        setIsLoading(true)
        try {
            const response = await SearchAPI.getPlanet(str)
            setPlanetsData(response.data.results)
        } catch (error) {
            setError(true)
        }
        setIsLoading(false)
    }

    return (
        <main>
            <h3>Start typing and you'll get all results that match your request:</h3>
            <label>
                <input
                    className='search-input'
                    type='text'
                    onChange={(e) => handleChange(e)}
                    value={inputVal}
                    placeholder='Type planet name'
                />
            </label>
            {isLoading && <Spinner />}
            {error && <div className="error">Sorry, error has occured, please try again later</div>}
            {!!planetsData && <SearchResult planets={planetsData} />}
        </main>
    )
}

export default SearchBlock
