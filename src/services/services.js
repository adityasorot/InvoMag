import axios from "axios";
import { SERVER_URL, ROLL_NUMBER } from "../utils/constants";

export function serviceCall() {
    return axios.post(`${SERVER_URL}`);
}

export function callDummyAPI(name) {
    return axios.post(
        `${SERVER_URL}${ROLL_NUMBER}/dummy.do?`,
        {},
        {
            headers: { "Content-Type": "application/json" },
            params: { name: name }
        }
    );
}

export const tableDataGet = async (pagecount, limit) => {
    const response = await axios(
        `http://localhost:8080/1830151/getdata?pagecount=${pagecount}&limit=${limit}`
    );
    return response.data;
};

// export const searchInvoice = async (data, pagecount, limit) => {
//     const response = await axios(
//         `http://localhost:8080/1830151/searchdata?invoice_id=${data}&pagecount=${pagecount}&limit=${limit}`
//     );
//     return response.data;
// };

export const searchInvoice = async (data, pagecount, limit) => {
    console.log("Search");
    const response = await axios(
        `http://localhost:8080/1830151/searchdata?invoice_id=${data}&pagecount=${pagecount}&limit=${limit}`
    );
    return response.data;
};

export function addData(data) {
    return axios.post(
        `http://localhost:8080/1830151/adddata`,
        {},
        {
            headers: { "Content-Type": "application/json" },
            params: data
        }
    );
}

export function deleteData(data) {
    return axios.post(
        `http://localhost:8080/1830151/deletedata`,
        {},
        {
            headers: { "Content-Type": "application/json" },
            params: data
        }
    );
}

export function editData(data) {
    return axios.post(
        `http://localhost:8080/1830151/editdata`,
        {},
        {
            headers: { "Content-Type": "application/json" },
            params: data
        }
    );
}

export const viewCorrData = async (data) => {
    const response = await axios(
        `http://localhost:8080/1830151/tempdata?doc_ids=${data}`
    );
    return response.data;
};

export const templates = async (data) => {
    const response = await axios(`http://localhost:8080/1830151/templates`);
    return response.data;
};

export const predictionApiData = async (data) => {
    const response = await axios(
        `http://localhost:8080/1830151/preddata?doc_ids=${data}`
    );
    return response.data;
};

export const predictionApi = async (data) => {
    const response = await axios.post(
        "http://127.0.0.1:5000/predict?",
        {},
        {
            headers: { "Content-Type": "application/json" },
            params: {
                data: data
            }
        }
    );
    return response.data;
};
