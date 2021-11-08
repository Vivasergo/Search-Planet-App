import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'
import { SearchAPI } from '../Service/api'

jest.mock('../Service/api')

const mockGetPlanets = SearchAPI.getPlanet as jest.MockedFunction<typeof SearchAPI.getPlanet>

beforeEach(() => {
    render(<App />)
})

it('renders Search planet application title', () => {
    const linkElement = screen.getByText(/Find your planet application/i)
    expect(linkElement).toBeInTheDocument()
})
it('should call api request with appropriate data', async () => {
    const inputField = screen.getByPlaceholderText('Type planet name')

    const queryString = 't'
     userEvent.type(inputField, queryString)

    await waitFor(() => {
        expect(mockGetPlanets).toBeCalledTimes(1)
        expect(mockGetPlanets).toBeCalledWith(queryString)
    })
})
