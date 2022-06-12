import { ParsedUrlQuery } from "querystring";
import { IFilters } from "../models/IFilters";
import { IHotelData } from "../models/IHotelData";

export const filterHotelsByFiltersFun = (hotels: IHotelData[], nightsNumber: number, filters: IFilters) => {
    let data = hotels;
    if (filters.s) data = hotels.filter(hotel => hotel.name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);
    if (filters.fromDate) data = data.filter(hotel => new Date(hotel.available_on) >= new Date(filters.fromDate));
    if (filters.toDate) data = data.filter(hotel => new Date(hotel.available_on) <= new Date(filters.toDate));
    if (filters.price) data = data.filter(hotel => Number(hotel.price) * nightsNumber <= Number(filters.price));
    if (filters.sort === 'name') data.sort((a, b) => a.name.localeCompare(b.name));
    if (filters.sort === 'price') data.sort((a, b) => a.price.localeCompare(b.price));
    return data;
}

export const filterHotelsByQueryFun = (hotels: IHotelData[], nightsNumber: number, query: ParsedUrlQuery) => {
    let data = hotels;
    for (let filter in query) {
        if (filter === 'fromDate') data = data.filter(hotel => new Date(hotel.available_on) >= new Date(query[filter] as string));
        if (filter === 'toDate') data = data.filter(hotel => new Date(hotel.available_on) <= new Date(query[filter] as string));
        if (filter === 'price') data = data.filter(hotel => Number(hotel.price) * nightsNumber <= Number(query.price));
        if (filter === 'sort' && query[filter] === 'name') data.sort((a, b) => a.name.localeCompare(b.name));
        if (filter === 'sort' && query[filter] === 'price') data.sort((a, b) => a.price.localeCompare(b.price));
    }
    return data;
}

export const updateRouterQuery = (filters: IFilters) => {
    let query: ParsedUrlQuery = {};
    const keys = Object.keys(filters);

    keys.forEach((item) => {
        let x = filters[item];
        if (x) query[item] = x;
    });

    return query;
}

const initialFilters = {
    s: '',
    price: '',
    fromDate: new Date('2022-08-15').toISOString().split('T')[0],
    toDate: new Date('2022-12-17').toISOString().split('T')[0],
    sort: ''
}

export const setQueryParams = (query: ParsedUrlQuery) => {
    return {
        ...initialFilters,
        ...query
    }
}