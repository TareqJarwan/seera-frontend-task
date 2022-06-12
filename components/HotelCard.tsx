import React from 'react'

import { IHotelData } from '../models/IHotelData'
import styles from '../styles/HotelCard.module.css';

const HotelCard = ({ hotel }: { hotel: IHotelData }) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h2>Name :</h2>
                <p>{hotel.name}</p>
            </div>
            <div className={styles.container}>
                <h2>Price :</h2>
                <p>{hotel.price}</p>
            </div>
            <div className={styles.container}>
                <h2>City :</h2>
                <p>{hotel.city}</p>
            </div>
        </div>
    )
}

export default HotelCard;