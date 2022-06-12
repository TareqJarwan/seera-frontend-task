import React, { useEffect, useState } from 'react';
import type { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router';

import { SearchFilters, Sidebar, HotelCards, Sorters } from '../components';

import { filterHotelsFun, updateRouterQuery } from '../utils/filterData';
import { fetchApi } from '../utils/fetchApi'

import { IFilters } from '../models/IFilters';
import { IHotelData } from '../models/IHotelData'

import styles from '../styles/Home.module.css';
import { ParsedUrlQuery } from 'querystring';

const initialFilters = {
    s: '',
    price: '',
    fromDate: new Date().toISOString().split('T')[0],
    toDate: new Date().toISOString().split('T')[0],
    sort: ''
}

const Hotels: NextPage<{ hotels: IHotelData[], min: number, max: number }> = ({ hotels, min, max }) => {
    const [filters, setFilters] = useState<IFilters>(initialFilters);

    const [filteredHotels, setFilteredHotels] = useState<IHotelData[]>([]);

    const router = useRouter();

    useEffect(() => {
        console.log('fff')
        setFilteredHotels(hotels);
        setFilters(prevFilters => ({ ...prevFilters, price: String(max) }));
    }, []);


    useEffect(() => {
        console.log('sss')
        // apply filters on the hotels array
        let data = filterHotelsFun(hotels, filters);
        setFilteredHotels(data);

        // update the query params 
        let query = updateRouterQuery(filters);
        router.push({ query });

    }, [filters]);

    useEffect(() => {
        const keys = Object.keys(filters);

        keys.forEach((item) => {
            setFilters((prevState) => ({
                ...prevState,
                // @ts-ignore
                [item]: router.query[item] as any || initialFilters[item]
            }));
        });

    }, [router.query]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SearchFilters filters={filters} setFilters={setFilters} />

            <div className={styles.container}>
                <Sidebar hotels={filteredHotels} filters={filters} setFilters={setFilters} min={min} max={max} />

                <div style={{ width: '1200px' }}>
                    <Sorters filters={filters} setFilters={setFilters} />
                    <HotelCards hotels={filteredHotels} />
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res: IHotelData[] = await fetchApi();
    //const data = filterHotelsFun(res);
    const data = res;

    const prices = data.map(hotel => parseInt(hotel.price));

    return {
        props: {
            hotels: data,
            min: Math.min(...prices),
            max: Math.max(...prices),
        }
    }
}

export default Hotels
