import React from 'react'
import { IHotelData } from '../models/IHotelData'
import HotelCard from './HotelCard'

import styles from '../styles/HotelCards.module.css';

interface propsType {
    hotels: IHotelData[],
    nightsNumber: number
}

const HotelCards = ({ hotels = [], nightsNumber }: propsType) => {
    if (hotels.length === 0) {
        return (
            <div className={styles.grid}>
                <h2 style={{ width: '600px', textAlign: 'center' }}>Ohh we are sorry, we don&apos;t find available Hotels in that date {'\n'} please try with different dates</h2>
            </div>
        )
    }

    return (
        <div className={styles.grid}>
            {hotels?.map(hotel => <HotelCard key={hotel.name} hotel={hotel} nightsNumber={nightsNumber} />)}
        </div>
    )
}

export default HotelCards;