import axios from "axios"
import { JobFilters} from "../redux/jobFilters.slice";


export const convertyFiltersToMOngoQuery = (filters: JobFilters) => {
    let query: any = {};
     if (filters.wage) {
        query.wage = { $gte: filters.wage };  // Example: wage greater than or equal to the given value
    }
    if (filters.workType) {
        query.workType = filters.workType;
    }

    if (filters.employmentType) {
        query.employmentType = filters.employmentType;
    }

    if (filters.search) {
        query.$or = [
        query.title = { $regex: filters.search, $options: "i" },  // Case-insensitive search
        query.description = { $regex: filters.search, $options: "i" }  // Case-insensitive search
        ];  // Search in title or description
    }
    return encodeURIComponent(JSON.stringify(query));
}

export const getJobs = async (page: number, limit : number, filters: JobFilters) => {
    const convertedFilters = convertyFiltersToMOngoQuery(filters);
    console.log(convertedFilters)

    const apiUrl = process.env.REACT_APP_SERVER_API_ENDPOINT;

    // console.log("maheer", apiUrl);
    const response = await axios.get(`${apiUrl}/jobs?page=${page}&limit=${limit}&filters=${convertedFilters}`);
    return response;
} 