import React from 'react'
import { IHotelData } from '../models/IHotelData'
import HotelCard from './HotelCard'

import styles from '../styles/HotelCards.module.css';

const HotelCards = ({ hotels = [] }: { hotels: IHotelData[] }) => {
    if (hotels.length === 0) {
        return (
            <div className={styles.grid}>
                <h2>Ohh we are sorry don&apos;t find available Hotels in that date {'\n'} please try different data</h2>
            </div>
        )
    }

    return (
        <div className={styles.grid}>
            {hotels?.map(hotel => <HotelCard key={hotel.name} hotel={hotel} />)}
        </div>
    )
}

export default HotelCards;