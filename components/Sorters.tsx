import React from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/router';

import { IFilters } from '../models/IFilters';
import { getNights } from '../utils/util';

import styles from '../styles/Sorters.module.css';

interface propsType {
    filters: IFilters;
    setFilters: Function
}

const Sorters = ({ filters, setFilters }: propsType) => {
    const router = useRouter();
    const { query } = router;

    const { fromDate, toDate } = query;

    const nights = getNights(fromDate, toDate);

    return (
        <div className={styles.container}>
            <p className={styles.nights}>Total Nights : {nights || 0}</p>
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