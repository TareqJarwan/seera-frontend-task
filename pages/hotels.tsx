import React, { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router';

import { Sidebar, HotelCards, Sorters } from '../components';

import { filterHotelsByFiltersFun, filterHotelsByQueryFun, setQueryParams, updateRouterQuery } from '../utils/filterData';
import { fetchApi } from '../utils/fetchApi'
import { getNightsNumber } from '../utils/util';

import { IFilters } from '../models/IFilters';
import { IHotelData } from '../models/IHotelData'

import styles from '../styles/Home.module.css';
interface propsType {
    hotels: IHotelData[],
    nightsNumber: number,
    min: number,
    max: number,
    initFilters: IFilters
}

const Hotels: NextPage<propsType> = ({ hotels, nightsNumber, min, max, initFilters }) => {
    const [filters, setFilters] = useState<IFilters>(initFilters);
    const [filteredHotels, setFilteredHotels] = useState<IHotelData[]>([]);

    const router = useRouter();

    useEffect(() => {
        setFilteredHotels(hotels);
    }, []);


    useEffect(() => {
        // apply filters on the hotels array
        let data = filterHotelsByFiltersFun(hotels, nightsNumber, filters);
        setFilteredHotels(data);

        // update the query params 
        let query = updateRouterQuery(filters);
        router.push({ query });

    }, [filters]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={styles.container}>
                <Sidebar hotels={filteredHotels} filters={filters} setFilters={setFilters} min={min * nightsNumber} max={max * nightsNumber} />

                <div style={{ width: '1200px' }}>
                    <Sorters filters={filters} setFilters={setFilters} nightsNumber={nightsNumber} />
                    <HotelCards hotels={filteredHotels} nightsNumber={nightsNumber} />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const res: IHotelData[] = await fetchApi();
    const prices = res.map(hotel => parseInt(hotel.price));
    const { fromDate, toDate } = query;
    const nightsNumber = getNightsNumber(fromDate, toDate);
    const filteredHotels = filterHotelsByQueryFun(res, nightsNumber, query);

    return {
        props: {
            hotels: filteredHotels,
            nightsNumber,
            min: Math.min(...prices),
            max: Math.max(...prices),
            initFilters: setQueryParams(query)
        }
    }
}

export default Hotels
