import { ParsedUrlQuery } from "querystring";
import { IFilters } from "../models/IFilters";
import { IHotelData } from "../models/IHotelData";

export const filterHotelsFun = (hotels: IHotelData[], filters: IFilters) => {
    let data = hotels.filter(hotel => hotel.name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);

    data = data.filter(hotel => new Date(hotel.available_on) >= new Date(filters.fromDate));
    data = data.filter(hotel => new Date(hotel.available_on) <= new Date(filters.toDate));
    data = data.filter(hotel => Number(hotel.price) <= Number(filters.price));
    if (filters.sort === 'name') data.sort((a, b) => a.name.localeCompare(b.name));
    if (filters.sort === 'price') data.sort((a, b) => a.price.localeCompare(b.price));

    return data;
}

export const getRouterQueryParams = (hotels: IHotelData[], query: ParsedUrlQuery) => {
    let data = hotels;
    for (let filter in query) {
        if (filter === 'fromDate') data = data.filter(hotel => new Date(hotel.available_on) >= new Date(query[filter] as string));
        if (filter === 'toDate') data = data.filter(hotel => new Date(hotel.available_on) <= new Date(query[filter] as string));
        if (filter === 'price') data = data.filter(hotel => Number(hotel.price) <= Number(query.price));
        if (filter === 'sort' && query[filter] === 'name') data.sort((a, b) => a.name.localeCompare(b.name));
        if (filter === 'sort' && query[filter] === 'price') data.sort((a, b) => a.price.localeCompare(b.price));
        console.log(query[filter])
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