import axios from "axios"
import { JobFilters} from "../redux/jobFilters.slice";


export const convertyFiltersToMOngoQuery = (filters: JobFilters) => {
    let query: any = {};
     if (filters.wage) {
        query.wage = { '$gte': filters.wage };  // Example: wage greater than or equal to the given value
    }
    if (filters.workType) {
        query.workType = filters.workType;
    }
    
    if (filters._createdAt) {
        query._createdAt = { '$gte': filters._createdAt.replace('Z', '+00:00') }
    }

    if (filters.employmentType) {
        query.employmentType = filters.employmentType;
    }

    if (filters.search) {
        query['$or'] = [
            { 'name': { '$regex': filters.search, '$options': "i" } },  // Case-insensitive search
            { 'description': { '$regex': filters.search, '$options': "i" } },  // Case-insensitive search
            { 'city': { '$regex': filters.search, '$options': "i" } },  // Case-insensitive search
            { 'company': { '$regex': filters.search, '$options': "i" } }  // Case-insensitive search
        ];  // Search in title or description
    }
    console.log(JSON.stringify(query))
    return encodeURIComponent(JSON.stringify(query));
}

export const getJobs = async (page: number, limit : number, filters: JobFilters) => {
    const convertedFilters = convertyFiltersToMOngoQuery(filters);
    console.log(convertedFilters)


    // console.log("maheer", apiUrl);
    const response = await axios.get(`http://localhost:8000/server/api/jobs?page=${page}&limit=${limit}&filters=${convertedFilters}`);
    
    return {jobs: response.data.data.jobs, _count: response.data.data.count};
} 