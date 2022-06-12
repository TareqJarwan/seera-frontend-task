import axios from "axios";

export const baseUrl = 'https://run.mocky.io/v3/48244d7b-52e9-4b5f-b122-bd763e53fa5c';

export const fetchApi = async () => {
    try {
        const response = await axios.get(baseUrl);

        const { data } = response;
        const convertToArray = data.split("\n");
        convertToArray.splice(convertToArray.length - 2, 2);
        const joinArr = convertToArray.join("\n");
        const result = joinArr + "}]";

        return JSON.parse(result);
    } catch (error) {
        console.log(error);
        return [];
    }
}