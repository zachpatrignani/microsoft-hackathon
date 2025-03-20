import axios from "axios";
import { Job } from "../models/job";
import { Note } from "../models/note";

export const getNotes = async (jobObject: Job, preference: string, impairments: string) => {
    
    const apiUrl = process.env.REACT_APP_SERVER_API_ENDPOINT;

    let jobObjectString : string = JSON.stringify(jobObject)

    const response = await axios.get(`${apiUrl}/notes?preferences=${preference}&impairments=${impairments}&jobObject=${jobObjectString}`);

    return response.data.data;
} 