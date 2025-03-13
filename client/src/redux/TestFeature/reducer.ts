import { Reducer } from "redux";

// Define Interface
export interface testFeatureState {
    data1: boolean,
    data2: number,
    data3: string
}

// Define initial state
export const initialState: testFeatureState = {
    data1: false,
    data2: 100,
    data3: "test"
};

// Define reducer
export const testFeatureReducer: Reducer<testFeatureState> = (state = initialState, action: any) => {

    switch (action.type) {
        case "SET_DATA_1": {
            const { data1 }  = action.payload;
            return { ...state, data1};
        }
        case "SET_DATA_2": {
            const { data2 }  = action.payload;
            return { ...state, data2};
        }
        case "SET_DATA_3": {
            const { data3 }  = action.payload;
            return { ...state, data3};
        }
    }

    return state;
};


// Define action

export const setData1 = (data1 : boolean) => {
    return {
        type : "SET_DATA_1",
        payload: { data1 } 
    }
}


export const setData2 = (data2 : number) => {
    return {
        type : "SET_DATA_2",
        payload: { data2 } 
    }
}

export const setData3 = (data3 : string) => {
    return {
        type : "SET_DATA_3",
        payload: { data3 } 
    }
}