import axios from 'axios'
import { PlanetType } from '../Types/Types'

export const SearchAPI = {
    getPlanet(query: string) {
       return axios.get<getPlanetResponse>(`https://swapi.dev/api/planets/?search=${query}`)
    },
}

type getPlanetResponse = {
    count: number
    next: null | string
    previous: null | string
    results: PlanetType[]
}