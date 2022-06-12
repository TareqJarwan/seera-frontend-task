import React from 'react'
import { Button } from '@mui/material'

import { IFilters } from '../models/IFilters';
import styles from '../styles/Sorters.module.css';

interface propsType {
    nightsNumber: number;
    filters: IFilters;
    setFilters: Function
}

const Sorters = ({ nightsNumber, filters, setFilters }: propsType) => {
    return (
        <div className={styles.container}>
            <p className={styles.nights}>Total Nights : {nightsNumber || 0}</p>
            <div className={styles.btnContainer}>
                <Button
                    variant={filters.sort === 'name' ? 'contained' : 'outlined'}
                    color='inherit'
                    onClick={() => setFilters({ ...filters, sort: 'name' })}
                >
                    Sort by Name
                </Button>

                <Button
                    variant={filters.sort === 'price' ? 'contained' : 'outlined'}
                    color='inherit'
                    onClick={() => setFilters({ ...filters, sort: 'price' })}
                >
                    Sort by Price
                </Button>
            </div>
        </div>
    )
}

export default Sorters