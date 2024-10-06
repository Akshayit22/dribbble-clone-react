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


export const useGetDesignersInfo = () => {
    console.log('from useGetDesignersInfo');
    return useQuery({

        queryFn: async () => {
            try {
                const data = await getDesignersInfoApi();
                console.log(data);
                return data.data;
            }
            catch (err) {
                console.log({ err });
            }
        },

        queryKey: ["DesignersInfo"],

    });
};

export const useGesignCards = () => {
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

export const useGFooterData = () => {
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