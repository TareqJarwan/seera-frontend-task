import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

import { IFilters } from '../models/IFilters';
import CustomDatePicker from './CustomDatePicker';

import styles from '../styles/SearchFilters.module.css';

interface propsType {
    filters: IFilters;
    setFilters: Function
}

const SearchFilters = ({ filters, setFilters }: propsType) => {

    const handleDateChange = (date: Date, name: string) => {
        setFilters({ ...filters, [name]: date.toISOString().split('T')[0] });
    };

    return (
        <div className={styles.container}>
            <CustomDatePicker
                name="fromDate"
                label="From Date"
                placeholder='Select Date'
                value={filters.fromDate}
                onChange={(date: Date | null) => handleDateChange(date ? date : new Date(), 'fromDate')} />

            <CustomDatePicker
                name="toDate"
                label="To Date"
                placeholder='Select Date'
                value={filters.toDate}
                onChange={(date: Date | null) => handleDateChange(date ? date : new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 'toDate')} />

            <Link href={`hotels/?fromDate=${filters.fromDate}&toDate=${filters.toDate}`}>
                <Button
                    variant='outlined'
                    color='inherit'
                    id='apply-filters'
                    className='btn'
                    type='button'
                    sx={{ mb: 1 }}
                >
                    Search
                </Button>
            </Link>
        </div>
    )
}

export default SearchFilters