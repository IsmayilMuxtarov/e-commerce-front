import axios from "axios";
import qs from "qs";


// const token = localStorage.getItem(ACCESS_TOKEN)

const instance = axios.create(
    {
        baseURL: 'http://funde.fund:1339/api/',
    }
)

export const getCategories = (limit) => {
    return instance.get(!limit ? 'categories?populate=%2A' : `categories?populate%5Bitems%5D%5Bpopulate%5D%5B0%5D=images&pagination[start]=0&pagination[limit]=${limit}`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.log(error.response.status);
            return {errorStatus: error.response.status}
        });
}


export const getFilters = () => {
    return instance.get('filters?populate=%2A')
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.log(error.response.status);
            return {errorStatus: error.response.status}
        });
}

export const getFilterData = (subFilter, category) => {
    console.log(subFilter);
    const query = qs.stringify(
        {
            locale: "ru",
            filters: {
                $and: [
                    {
                        subfilters: {
                            name: {
                                $contains: subFilter,
                            },
                        },
                    },
                    {
                        subcategory: {
                            name: {
                                $contains: category,
                            },
                        },
                    },
                ],
            },
            populate: "*",
        },
        {
            encodeValuesOnly: true,
        }
    );

    return instance.get(`items?${query}`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.log(error.response.status);
            return {errorStatus: error.response.status}
        });
}


export const getCartItems = (items) => {
    const query = qs.stringify(
        {
            filters: {
                id: {
                    $in: items,
                },
            },
            populate: "*",
        },
        {
            encodeValuesOnly: true,
        }
    );

    return instance.get(`items?${query}`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.log(error.response.status);
            return {errorStatus: error.response.status}
        });
}

export const getItemInfo = (itemId) => {
    return instance.get(`items/${itemId}/?populate=%2A`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.log(error.response.status);
            return {errorStatus: error.response.status}
        });
}