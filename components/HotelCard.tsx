import React from 'react'

import { IHotelData } from '../models/IHotelData';

import styles from '../styles/HotelCard.module.css';

interface propsType {
    hotel: IHotelData,
    nightsNumber: number
}

const HotelCard = ({ hotel, nightsNumber }: propsType) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h2>Name :</h2>
                <p>{hotel.name}</p>
            </div>
            <div className={styles.container}>
                <h2>Night Price :</h2>
                <p>{Number(hotel.price)} AED</p>
            </div>
            <div className={styles.container}>
                <h2>Total Price :</h2>
                <p>{Number(hotel.price) * nightsNumber} AED</p>
            </div>
            <div className={styles.container}>
                <h2>City :</h2>
                <p>{hotel.city}</p>
            </div>
        </div>
    )
}

export default HotelCard;