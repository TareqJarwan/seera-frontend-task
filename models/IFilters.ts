export interface IFilters extends IObjectKeys {
    fromDate: string,
    toDate: string,
    s: string;
    price: string;
    sort: string;
}

interface IObjectKeys {
    [key: string]: string;
}