import axios from "axios"

export const getJobs = async (limit : number) => {

    const apiUrl = process.env.REACT_APP_SERVER_API_ENDPOINT;

    // console.log("maheer", apiUrl);
    const response = await axios.get(`${apiUrl}/getJobsWithLimit`, {
        params: { limit }
    });
    // console.log("maheer", response);
    return response;
} 