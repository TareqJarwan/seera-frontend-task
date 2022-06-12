const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const getNights = (fromDate: string | string[] | undefined, toDate: string | string[] | undefined) => {
    const value1 = Array.isArray(fromDate) ? fromDate[0] : fromDate;
    const value2 = Array.isArray(toDate) ? toDate[0] : toDate;

    const from = new Date(value1 ? value1 : '');
    const to = new Date(value2 ? value2 : '');
    return dateDiffInDays(from, to)
}

export const dateDiffInDays = (from: Date, to: Date) => {
    const utc1 = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
    const utc2 = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}