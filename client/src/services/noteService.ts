import axios from "axios";
import { Note } from "../models/note";

export const getNotes = async (jobId: string, preference: string, impairments: string) => {
    
    const apiUrl = process.env.REACT_APP_SERVER_API_ENDPOINT;

    const response = await axios.get(`${apiUrl}/notes?preferences=${preference}&impairments=${impairments}&jobId=${jobId}`);

    console.log("maheer2", response);
    return response.data.data;
} 