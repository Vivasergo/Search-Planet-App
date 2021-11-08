import React from 'react'
import { PlanetType } from '../../Types/Types'
import _ from 'lodash'
import srcPlanet from './images/WME4.gif'
import './SearchResult.css'
import moment from 'moment'

type propsType = {
    planets: PlanetType[]
}

const SearchResult = React.memo(
    (props: propsType) => {
        
        return (
            <section className='search-result-block'>
                {props.planets.map((planet) => {
                    return (
                        <div className='search-result-item' key={planet.name}>
                            <h4>{planet.name}</h4>
                            <hr />
                            <div className='planet-info'>
                                <div className='image-block'>
                                    <img className='planet-image' src={srcPlanet} alt='planet' />
                                </div>

                                <div className='planet-desc'>
                                    <ul>
                                        <li>
                                            Climate:<span> {planet.climate}</span>
                                        </li>

                                        <li>
                                            Diameter:<span> {planet.diameter}</span>
                                        </li>
                                        <li>
                                            Gravity:<span> {planet.gravity}</span>
                                        </li>
                                        <li>
                                            Orbital period:<span> {planet.orbital_period}</span>
                                        </li>
                                        <li>
                                            Rotation period:<span> {planet.rotation_period}</span>
                                        </li>
                                        <li>
                                            Terrain:<span> {planet.terrain}</span>
                                        </li>
                                        <li>
                                            Surface water:<span> {planet.surface_water}</span>
                                        </li>
                                        <li>
                                            Population:<span> {planet.population}</span>
                                        </li>
                                    </ul>
                                    <div className='created-date'>
                                        Created:{' '}
                                        <em>
                                            {moment(Date.parse(planet.created)).format('hh:mm, MM-DD-YYYY')}
                                        </em>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    },
    (prevProps, props) => {
        return _.isEqual(prevProps.planets, props.planets)
    }
)

export default SearchResult
