import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL:string = 'http://localhost:3000';

const getDesignersInfoApi = async () => {
    return axios.get(`${URL}/designers-info`);
};

const getDesignCardsApi = async () => {
    return axios.get(`${URL}/design-cards-data`);
};

const getFooterDataApi = async () => {
    return axios.get(`${URL}/footer-cards-data`);
};


export const useGetDesignersInfo = () => {
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

export const useGetDesignCards = () => {
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

export const useGetFooterData = () => {
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