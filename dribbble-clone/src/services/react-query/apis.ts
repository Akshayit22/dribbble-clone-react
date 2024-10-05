import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = 'http://localhost:3000/data'

const getDesignersInfoApi = async () => {
    return axios.get(`${URL}/designers-data.json`);
};

const getDesignCardsApi = async () => {
    return axios.get(`${URL}/design-cards.json`);
};

const getFooterDataApi = async () => {
    return axios.get(`${URL}/footer-data.json`);
};

// const getUserInfoApi = async() =>{
//     return axios.get(`${URL}/users`);
// }

// const postUserInfoApi = async () => {
//     return axios.post(`${URL}/users`);
// }

export const getDesignersInfo = () => {
    return useQuery({

        queryFn: async () => {
            try {
                const data = await getDesignersInfoApi();
                return data.data;
            }
            catch (err) {
                console.log({ err });
            }
        },

        queryKey: ["DesignersInfo"],

    });
};

export const getDesignCards = () => {
    return useQuery({

        queryFn: async () => {
            try {
                const data = await getDesignCardsApi();
                return data.data;
            }
            catch (err) {
                console.log({ err });
            }
        },

        queryKey: ["DesignCards"],

    });
};

export const getFooterData = () => {
    return useQuery({

        queryFn: async () => {
            try {
                const data = await getFooterDataApi();
                return data.data;
            }
            catch (err) {
                console.log({ err });
            }
        },

        queryKey: ["FooterData"],

    });
};