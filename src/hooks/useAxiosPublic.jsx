import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://16.171.146.50:5000'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
