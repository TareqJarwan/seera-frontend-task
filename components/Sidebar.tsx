import React from 'react'

import { FormInputText, CustomSlider } from './'

import { IHotelData } from '../models/IHotelData';
import { IFilters } from '../models/IFilters';

import styles from '../styles/Sidebar.module.css';

interface propsType {
    hotels: IHotelData[]
    filters: IFilters;
    setFilters: Function;
    min: number;
    max: number;
}

const Sidebar = ({ filters, setFilters, min, max }: propsType) => {
    return (
        <div className={styles.container}>
            <FormInputText
                label='Hotel Name'
                placeholder='Hotel Name'
                name='name'
                value={filters.s}
                onChange={e => setFilters({ ...filters, s: e.target.value })}
            />

            <CustomSlider
                label='Price Filter'
                name='name'
                min={min}
                max={max}
                onChange={(e, value) => setFilters({ ...filters, price: Number(value) })}
            />

        </div>
    )
}

export default Sidebar